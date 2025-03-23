import IconButtonCustom from "@/components/atoms/IconButtonCustom/IconButtonCustom"
import { StyledToolbar } from "./SocialIcons.styles"

function SocialIcons() {
  return (
    <StyledToolbar>
      <IconButtonCustom iconSrc="./icons/tiktok.svg" />
      <IconButtonCustom iconSrc="./icons/instagram.svg" />
    </StyledToolbar>
  )
}

export default SocialIcons
