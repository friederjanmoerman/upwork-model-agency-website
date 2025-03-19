import { styled } from "@mui/material"

export const StyledVideo = styled("video")(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "10% center",
  zIndex: -1,
}))
