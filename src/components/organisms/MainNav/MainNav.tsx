import IconButtonCustom from "@/components/atoms/IconButtonCustom/IconButtonCustom"
import { StyledAppBar, StyledToolbar } from "./MainNav.styles"

function MainNav() {
  return (
    <StyledAppBar position="relative" elevation={0} color="transparent">
      <StyledToolbar>
        <IconButtonCustom iconSrc="./icons/tiktok.svg" />
        <IconButtonCustom iconSrc="./icons/instagram.svg" />
      </StyledToolbar>
    </StyledAppBar>
  )
}

export default MainNav
