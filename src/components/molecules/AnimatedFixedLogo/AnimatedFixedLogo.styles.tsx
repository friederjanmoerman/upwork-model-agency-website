// Styles
import { styled } from "@mui/material/styles"

// Properties
import { AnimatedFixedLogoContainerProps } from "./AnimatedFixedLogo.props"

export const AnimatedFixedLogoContainer = styled("div")<AnimatedFixedLogoContainerProps>(({ visible }) => ({
  position: "fixed",
  top: "40px",
  left: "5%",
  opacity: visible ? 1 : 0,
  transition: "opacity 100ms ease-in",
  zIndex: 1000,
}))
