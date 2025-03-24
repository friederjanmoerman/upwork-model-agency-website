import { Button, ButtonProps } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  fontFamily: "Norse, Arial, sans-serif",
  fontSize: "24px",
  fontWeight: "800",
  background: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  padding: "10px 40px",
}))
