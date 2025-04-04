"use client"

// Theme
import theme from "@/theme"

// Styles
import { ThemeProvider } from "@mui/material/styles"

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
