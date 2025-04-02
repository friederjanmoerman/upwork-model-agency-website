import Grid, { GridProps } from "@mui/material/Grid"
import { styled } from "@mui/material"
import Image from "next/image"
import theme from "@/theme"

export const StyledContainerFollowerSection = styled(Grid)<GridProps>(() => ({
  minHeight: "100vh",
  paddingTop: "200%;",
  paddingBottom: "100px",
}))

export const StyledSection = styled(Grid)<GridProps>(() => ({
  display: "flex",
  textAlign: "center",
  justifyContent: "space-evenly",
  position: "relative",
  color: theme.palette.primary.main,
  zIndex: "50",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
  },
}))

export const StyledFollower = styled(Grid)<GridProps>(() => ({
  opacity: 0,
  transform: "translateY(30px)",
  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
  marginBottom: "40px",

  "&.fade-in": {
    opacity: 1,
    transform: "translateY(0)",
  },

  img: {
    filter: "invert(42%) sepia(87%) saturate(230%) hue-rotate(355deg) brightness(94%) contrast(87%)",
  },
}))

export const StyledFollowerIcon = styled(Image)(() => ({
  margin: "0 auto 30px",
}))
