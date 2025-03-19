// AnimatedFixedLogo.tsx
"use client"

import React, { useEffect, useState } from "react"
import { AnimatedFixedLogoContainer } from "./AnimatedFixedLogo.styles"
import Logo from "@/components/atoms/Logo/Logo"

const AnimatedFixedLogo = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight

      if (window.scrollY >= triggerPoint) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatedFixedLogoContainer visible={visible}>
      <Logo />
    </AnimatedFixedLogoContainer>
  )
}

export default AnimatedFixedLogo
