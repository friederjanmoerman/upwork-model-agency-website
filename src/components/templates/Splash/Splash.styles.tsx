import theme from "@/theme"
import { styled, Theme } from "@mui/material/styles"

export const StyledSplash = styled("section")(() => ({
  display: "flex",
  height: "100vh",
  paddingBottom: "40%",
  flexDirection: "column",
}))

export const StyledSplashBody = styled("div")(() => ({
  display: "flex",
  height: "100%",
  alignItems: "center",
  justifyContent: "space-between",
}))

export const StyledSplashBodyLeft = styled("div")(({ theme }: { theme: Theme }) => ({
  alignSelf: "flex-start",
  fontFamily: theme.typography.fontFamily,
  fontSize: "32px",
  color: theme.palette.primary.main,
  fontWeight: "800",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    fontSize: "22px",
  },
}))

export const StyledSplashBodyRight = styled("div")(({ theme }: { theme: Theme }) => ({
  alignSelf: "flex-end",
  fontFamily: theme.typography.fontFamily,
  fontSize: "32px",
  color: theme.palette.primary.main,
  fontWeight: "800",
  display: "flex",
  flexDirection: "column",
  marginBottom: "4%",
  [theme.breakpoints.down("md")]: {
    fontSize: "22px",
  },
}))

export const StyledSplashBodyLeftEmphasis = styled("span")(() => ({
  fontSize: "80px",
  [theme.breakpoints.down("md")]: {
    fontSize: "40px",
  },
}))

export const StyledSplashBodyRightEmphasis = styled("span")(() => ({
  fontSize: "54px",
  [theme.breakpoints.down("md")]: {
    fontSize: "37px",
  },
}))
