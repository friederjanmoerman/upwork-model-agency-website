import { styled } from "@mui/material"

export const StyledImage = styled("img")(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: -1,
  pointerEvents: "none",
}))
