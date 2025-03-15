import Typography from "@mui/material/Typography"
import IconButtonCustom from "@/components/atoms/IconButtonCustom/IconButtonCustom"
import { StyledHeader, StyledToolbar } from "./MainNav.styles"
import { AppBar } from "@mui/material"

function MainNav() {
  return (
    <StyledHeader component="header">
      <AppBar elevation={0} color="transparent" position="fixed">
        <StyledToolbar>
          <IconButtonCustom iconSrc="./icons/tiktok.svg" />
          <IconButtonCustom iconSrc="./icons/instagram.svg" />
        </StyledToolbar>
      </AppBar>
      <Typography color="primary" variant="h1">
        Valhalla Girls
      </Typography>
    </StyledHeader>
  )
}

export default MainNav
