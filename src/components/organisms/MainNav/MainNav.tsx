import { StyledAppBar } from "./MainNav.styles"
import SocialIcons from "@/components/molecules/SocialIcons/SocialIcons"

function MainNav() {
  return (
    <StyledAppBar position="relative" elevation={0} color="transparent">
      <SocialIcons />
    </StyledAppBar>
  )
}

export default MainNav
