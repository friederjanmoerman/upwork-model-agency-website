import IconButtonCustom from "@/components/atoms/IconButtonCustom/IconButtonCustom"
import { StyledToolbar } from "./MainNav.styles"
import { AppBar, Box } from "@mui/material"

function MainNav() {
  return (
    <Box component="header">
      <AppBar elevation={0} color="transparent">
        <StyledToolbar>
          <IconButtonCustom iconSrc="./icons/tiktok.svg" />
          <IconButtonCustom iconSrc="./icons/instagram.svg" />
        </StyledToolbar>
      </AppBar>
    </Box>
  )
}

export default MainNav
