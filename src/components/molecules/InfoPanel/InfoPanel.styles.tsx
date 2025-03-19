// InfoPanel.styles.tsx
import { styled } from "@mui/material"

interface StyledPanelProps {
  progress: number
}

export const StyledPanel = styled("div")<StyledPanelProps>(({ progress }) => ({
  position: "fixed",
  top: "50%",
  right: "5%", // Adjust right margin as needed
  width: "45%", // matches your flex-basis of 45%
  transform: `translateY(-50%) translateY(${(0.5 - progress) * 100}px)`,
  opacity: 1 - Math.abs(0.5 - progress) * 2,
  transition: "opacity 0.1s ease-out, transform 0.1s ease-out",
  pointerEvents: "none",
  padding: "16px",
  zIndex: 10,
}))
