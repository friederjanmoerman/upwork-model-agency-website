import Grid2, { Grid2Props } from "@mui/material/Grid2"
import { styled } from "@mui/material"
import Image from "next/image"

export const StyledSection = styled(Grid2)<Grid2Props>(() => ({
  display: "flex",
  minHeight: "100vh",
  paddingTop: "40",
  alignItems: "center",
  justifyContent: "space-between",
}))

export const StyledTier = styled(Grid2)<Grid2Props>(() => ({
  flexDirection: "column",
  display: "flex",
  flex: "0 0 30%",
  opacity: 0, // Initially hidden
  transform: "translateY(30px)", // Start slightly lower
  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",

  "&.fade-in": {
    opacity: 1,
    transform: "translateY(0)",
  },

  "&:nth-child(1) img": {
    filter: "invert(42%) sepia(87%) saturate(230%) hue-rotate(355deg) brightness(94%) contrast(87%)",
  },

  "&:nth-child(2) img": {
    filter: "invert(50%) sepia(20%) saturate(120%) hue-rotate(180deg) brightness(90%) contrast(80%)",
  },

  "&:nth-child(3) img": {
    filter: "invert(20%) sepia(22%) saturate(1849%) hue-rotate(358deg) brightness(95%) contrast(86%)",
  },
}))

export const StyledTierIcon = styled(Image)(() => ({
  margin: "0 auto 30px",
}))
