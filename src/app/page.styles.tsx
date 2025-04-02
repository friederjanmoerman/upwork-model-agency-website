import theme from "@/theme"
import { styled } from "@mui/material"

export const StyledContainer = styled("div")(() => ({
  maxWidth: "1400px",
  padding: "0 5%",
  margin: "0 auto",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    padding: "0 5%",
  },
}))
