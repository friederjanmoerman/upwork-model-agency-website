"use client"

import React, { useEffect, useState } from "react"
import { StyledImage } from "./BackgroundFrames.styles"

const FRAME_COUNT = 167

const pad = (num: number, size = 3) => num.toString().padStart(size, "0")

const BackgroundFrames = () => {
  const [frameIndex, setFrameIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight
      const scrollFraction = scrollTop / maxScroll
      const index = Math.min(FRAME_COUNT - 1, Math.floor(scrollFraction * FRAME_COUNT))
      setFrameIndex(index)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const currentFrame = `/stills/webp/Standard_Mode_camera_circles_around_subject_as${pad(frameIndex)}.webp`

  return <StyledImage src={currentFrame} alt={`frame ${frameIndex}`} />
}

export default BackgroundFrames
