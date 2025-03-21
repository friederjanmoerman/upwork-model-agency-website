import { styled, Theme } from "@mui/material"

export const StyledFooter = styled("footer")(({ theme }: { theme: Theme }) => ({
  padding: "100px 0",
  background: theme.palette.primary.main,
}))
