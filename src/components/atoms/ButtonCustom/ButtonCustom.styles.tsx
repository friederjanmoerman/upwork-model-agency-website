import { Button } from "@mui/material"
import { styled, Theme } from "@mui/material/styles"

export const StyledButton = styled(Button)(({ theme }: { theme: Theme }) => ({
  fontFamily: "Norse, Arial, sans-serif",
  fontSize: "24px",
  fontWeight: "800",
  background: theme.palette.secondary.main,
  color: theme.palette.primary.main,
}))
