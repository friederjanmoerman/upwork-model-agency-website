// InfoPanel.tsx
"use client"

import React, { useEffect, useState } from "react"
import Typography from "@mui/material/Typography"
import { StyledPanel } from "./InfoPanel.styles"
import ButtonCustom from "@/components/atoms/ButtonCustom/ButtonCustom"

type InfoPanelProps = {
  setIsOpen: (open: boolean) => void
}

function InfoPanel({ setIsOpen }: InfoPanelProps) {
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
      <Typography variant="h2">
        Work less,<br></br>get paid more
      </Typography>
      <ButtonCustom onClick={() => setIsOpen(true)}>Apply here</ButtonCustom>
    </StyledPanel>
  )
}

export default InfoPanel
