"use client"

import Splash from "@/components/templates/Splash/Splash"
import InfoSection from "@/components/templates/InfoSection/InfoSection"
import TierSection from "@/components/templates/TierSection/TierSection"
import { StyledContainer } from "./page.styles"
import AnimatedFixedLogo from "@/components/molecules/AnimatedFixedLogo/AnimatedFixedLogo"
import Footer from "@/components/templates/Footer/Footer"
import ModalForm from "@/components/organisms/Form/ModalForm"
import { Button } from "@mui/material"

import { useState } from "react"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <StyledContainer>
        <AnimatedFixedLogo />
        <Splash />
        <InfoSection />
        <TierSection />
        <Button variant="contained" onClick={() => setIsOpen(true)}>
          Open Model Application
        </Button>

        <ModalForm open={isOpen} handleClose={() => setIsOpen(false)} />
      </StyledContainer>
      <Footer />
    </>
  )
}
