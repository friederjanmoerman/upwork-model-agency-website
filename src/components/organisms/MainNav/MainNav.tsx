import IconButtonCustom from "@/components/atoms/IconButtonCustom/IconButtonCustom"
import { StyledAppBar, StyledToolbar } from "./MainNav.styles"

function MainNav() {
  return (
    <StyledAppBar elevation={0} color="transparent">
      <StyledToolbar>
        <IconButtonCustom iconSrc="./icons/tiktok.svg" />
        <IconButtonCustom iconSrc="./icons/instagram.svg" />
      </StyledToolbar>
    </StyledAppBar>
  )
}

export default MainNav
