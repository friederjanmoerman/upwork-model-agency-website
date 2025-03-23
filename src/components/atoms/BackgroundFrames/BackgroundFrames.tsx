"use client"

import React, { useEffect, useState } from "react"
import { StyledBackgroundWrapper, StyledImage, StyledOverlay } from "./BackgroundFrames.styles"

const FRAME_COUNT = 167

const pad = (num: number, size = 3) => num.toString().padStart(size, "0")

const BackgroundFrames = () => {
  const [frameIndex, setFrameIndex] = useState(0)
  // NEW: Track overlay opacity from 0 to 1
  const [overlayOpacity, setOverlayOpacity] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight

      // For the frame index
      const scrollFraction = scrollTop / maxScroll
      const index = Math.min(FRAME_COUNT - 1, Math.floor(scrollFraction * FRAME_COUNT))
      setFrameIndex(index)

      const clampedFraction = Math.max(0, Math.min(1, scrollFraction))
      setOverlayOpacity(clampedFraction)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const currentFrame = `/stills/webp/Standard_Mode_camera_circles_around_subject_as${pad(frameIndex)}.webp`

  return (
    <StyledBackgroundWrapper>
      <StyledImage src={currentFrame} alt={`frame ${frameIndex}`} fill sizes="100vw" priority />
      <StyledOverlay style={{ opacity: overlayOpacity }} />
    </StyledBackgroundWrapper>
  )
}

export default BackgroundFrames
