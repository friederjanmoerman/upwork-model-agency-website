import Grid, { GridProps } from "@mui/material/Grid"
import { styled } from "@mui/material"
import Image from "next/image"
import theme from "@/theme"

export const StyledContainerTierSection = styled(Grid)<GridProps>(() => ({
  minHeight: "80vh",
  paddingTop: "340px",
  paddingBottom: "100px",
  background:
    "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.70) 40%, rgba(255, 255, 255, 1) 100%)",
}))

export const StyledSection = styled(Grid)<GridProps>(() => ({
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    alignItems: "center",
  },
}))

export const StyledTier = styled(Grid)<GridProps>(() => ({
  opacity: 0,
  transform: "translateY(30px)",
  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
  marginBottom: "40px",

  "&.fade-in": {
    opacity: 1,
    transform: "translateY(0)",
  },

  "&:nth-of-type(1) img": {
    filter: "invert(42%) sepia(87%) saturate(230%) hue-rotate(355deg) brightness(94%) contrast(87%)",
  },

  "&:nth-of-type(2) img": {
    filter: "invert(50%) sepia(20%) saturate(120%) hue-rotate(180deg) brightness(90%) contrast(80%)",
  },

  "&:nth-of-type(3) img": {
    filter: "invert(20%) sepia(22%) saturate(1849%) hue-rotate(358deg) brightness(95%) contrast(86%)",
  },
}))

export const StyledTierIcon = styled(Image)(() => ({
  margin: "0 auto 30px",
}))
