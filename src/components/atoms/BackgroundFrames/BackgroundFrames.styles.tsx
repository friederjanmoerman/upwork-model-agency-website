// MUI
import { styled } from "@mui/material"

export const StyledBackgroundWrapper = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  zIndex: -1,
})

export const StyledCanvas = styled("canvas")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
})

export const StyledOverlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
  pointerEvents: "none",
  opacity: 0,
  transition: "opacity 0.2s ease",
  zIndex: 1,
})

export const StyledOverlayTest = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: `
    linear-gradient(
      135deg,
      white 0%,
      rgba(255, 255, 255, 0.8) 15%,
      rgba(255, 255, 255, 0.4) 25%,
      transparent 40%,
      rgba(255, 255, 255, 0.4) 55%,
      rgba(255, 255, 255, 0.8) 65%,
      white 100%
    )
  `,
  pointerEvents: "none",
  zIndex: 2,
})
