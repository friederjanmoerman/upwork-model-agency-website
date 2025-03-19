// InfoPanel.styles.tsx
import { styled } from "@mui/material"

interface StyledPanelProps {
  visible: boolean
}

export const StyledPanel = styled("div")<StyledPanelProps>(({ visible }) => ({
  flex: "0 0 45%",
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(40px)",
  transition: "opacity 0.8s ease, transform 0.8s ease",
}))
