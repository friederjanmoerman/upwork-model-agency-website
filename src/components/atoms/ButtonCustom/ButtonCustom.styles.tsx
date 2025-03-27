import { Button, ButtonProps } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  fontFamily: "Norse, Arial, sans-serif",
  fontSize: "22px",
  fontWeight: "800",
  borderRadius: "50px",
  border: `2px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  padding: "10px 40px",
  "&:hover": {
    background: theme.palette.secondary.main,
    border: `2px solid ${theme.palette.secondary.main}`,
  },
}))
