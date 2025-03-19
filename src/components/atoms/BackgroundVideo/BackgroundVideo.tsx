"use client"

import React from "react"
import { StyledVideo } from "./BackgroundVideo.styles"

const BackgroundVideo = () => {
  return (
    <StyledVideo autoPlay muted loop playsInline>
      <source src="./video/background.mp4" type="video/mp4" />
    </StyledVideo>
  )
}

export default BackgroundVideo
