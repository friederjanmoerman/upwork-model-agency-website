// TierSection.styles.ts
import Grid2, { Grid2Props } from "@mui/material/Grid2"
import { styled } from "@mui/material"

export const StyledSection = styled(Grid2)<Grid2Props>(() => ({
  display: "flex",
  minHeight: "100vh",
  alignItems: "center",
  justifyContent: "space-between",
}))

export const StyledTier = styled(Grid2)<Grid2Props>(() => ({
  flexDirection: "column",
  display: "flex",
  alignItems: "center",
  flex: "0 0 30%",
}))
