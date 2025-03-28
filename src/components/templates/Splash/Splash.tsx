"use client"

import { Typography } from "@mui/material"
import {
  StyledSplash,
  StyledSplashBody,
  StyledSplashBodyLeft,
  StyledSplashBodyLeftEmphasis,
  StyledSplashBodyRight,
  StyledSplashBodyRightEmphasis,
} from "./Splash.styles"
import MainNav from "@/components/organisms/MainNav/MainNav"

function Splash() {
  return (
    <StyledSplash>
      <MainNav></MainNav>
      <Typography color="primary" variant="h1">
        Valhalla Girls
      </Typography>
      <StyledSplashBody>
        <StyledSplashBodyLeft>
          High end AI media
          <StyledSplashBodyLeftEmphasis>
            boosting your<br></br> engagement
          </StyledSplashBodyLeftEmphasis>
          to valhalla
        </StyledSplashBodyLeft>
        <StyledSplashBodyRight>
          Accepting only <StyledSplashBodyRightEmphasis>a select number</StyledSplashBodyRightEmphasis> of models
        </StyledSplashBodyRight>
      </StyledSplashBody>
    </StyledSplash>
  )
}

export default Splash
