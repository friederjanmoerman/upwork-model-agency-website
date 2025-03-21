#!/bin/bash

# Directory with PNGs (default: current dir)
INPUT_DIR="./"
OUTPUT_DIR="./webp"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Loop through all PNG files
for img in "$INPUT_DIR"/*.png; do
  filename=$(basename "$img" .png)
  output="$OUTPUT_DIR/${filename}.webp"

  # Convert with optimal settings
  if cwebp -q 80 -m 6 -mt -alpha_q 100 "$img" -o "$output"; then
    echo "✅ Converted: $img -> $output"
    rm "$img"
    echo "🗑️ Deleted: $img"
  else
    echo "❌ Failed to convert: $img"
  fi
done
