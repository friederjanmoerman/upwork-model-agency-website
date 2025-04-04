// Components
import SocialIcons from "@/components/molecules/SocialIcons/SocialIcons"

// Styles
import { StyledAppBar } from "./MainNav.styles"

function MainNav() {
  return (
    <StyledAppBar position="relative" elevation={0} color="transparent">
      <SocialIcons />
    </StyledAppBar>
  )
}

export default MainNav
