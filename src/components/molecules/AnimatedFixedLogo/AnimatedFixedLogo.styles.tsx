// AnimatedFixedLogo.styles.tsx
import { styled } from "@mui/material/styles"

interface AnimatedFixedLogoContainerProps {
  visible: boolean
}

export const AnimatedFixedLogoContainer = styled("div")<AnimatedFixedLogoContainerProps>(({ visible }) => ({
  position: "fixed",
  top: "40px",
  left: "5%",
  opacity: visible ? 1 : 0,
  transition: "opacity 100ms ease-in-out",
  zIndex: 1000,
}))
