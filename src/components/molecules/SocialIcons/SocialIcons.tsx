// Components
import IconButtonCustom from "@/components/atoms/IconButtonCustom/IconButtonCustom"

// Styles
import { StyledToolbar } from "./SocialIcons.styles"

function SocialIcons() {
  return (
    <StyledToolbar>
      <IconButtonCustom href="https://www.tiktok.com/@valhallagirlsoriginal" iconSrc="./icons/tiktok.svg" />
      <IconButtonCustom href="https://www.instagram.com/valhallagirlsofficial/" iconSrc="./icons/instagram.svg" />
    </StyledToolbar>
  )
}

export default SocialIcons
