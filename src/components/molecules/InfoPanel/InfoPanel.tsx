// InfoPanel.tsx
"use client"

import React, { useEffect, useState } from "react"
import Typography from "@mui/material/Typography"
import { StyledPanel } from "./InfoPanel.styles"

const InfoPanel = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleScroll = () => {
    const totalScroll = document.body.scrollHeight - window.innerHeight
    const currentScroll = window.scrollY
    const progress = currentScroll / totalScroll

    const clampedProgress = Math.min(Math.max(progress, 0), 1)
    setScrollProgress(clampedProgress)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <StyledPanel progress={scrollProgress}>
      <Typography variant="h2">Custom AI Viking Videos</Typography>
      <Typography color="primary" variant="body1">
        Your real likeness into one-of-a-kind Viking-inspired videos that captivate and resonate. Your natural beauty
        amplified.
      </Typography>
    </StyledPanel>
  )
}

export default InfoPanel
