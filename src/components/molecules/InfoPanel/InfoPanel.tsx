// InfoPanel.tsx
"use client"

import React, { useEffect, useRef, useState } from "react"
import Typography from "@mui/material/Typography"
import { StyledPanel } from "./InfoPanel.styles"

function InfoPanel() {
  const panelRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 } // Adjust threshold as necessary
    )

    if (panelRef.current) observer.observe(panelRef.current)

    return () => {
      if (panelRef.current) observer.unobserve(panelRef.current)
    }
  }, [])

  return (
    <>
      <StyledPanel ref={panelRef} visible={isVisible}></StyledPanel>
      <StyledPanel ref={panelRef} visible={isVisible}>
        <Typography variant="h2">Custom AI Viking Videos</Typography>
        <Typography color="primary" variant="body1">
          Your real likeness into one-of-a-kind Viking-inspired videos that captivate and resonate. Your natural beauty
          amplified.
        </Typography>
      </StyledPanel>
    </>
  )
}

export default InfoPanel
