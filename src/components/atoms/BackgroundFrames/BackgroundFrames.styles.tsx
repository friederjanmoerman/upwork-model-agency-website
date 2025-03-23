import { styled } from "@mui/material"
import Image from "next/image"

export const StyledBackgroundWrapper = styled("div")(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1,
  pointerEvents: "none",
}))

export const StyledImage = styled(Image)(() => ({
  position: "absolute",
  objectFit: "cover",
  zIndex: -2,
}))

export const StyledOverlay = styled("div")(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "white",
  zIndex: -1,
  transition: "opacity 0.2s ease-out",
}))
