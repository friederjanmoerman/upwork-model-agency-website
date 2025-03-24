"use client"

import Splash from "@/components/templates/Splash/Splash"
import InfoSection from "@/components/templates/InfoSection/InfoSection"
import TierSection from "@/components/templates/TierSection/TierSection"
import { StyledContainer } from "./page.styles"
import AnimatedFixedLogo from "@/components/molecules/AnimatedFixedLogo/AnimatedFixedLogo"

import Footer from "@/components/templates/Footer/Footer"
import BackgroundFrames from "@/components/atoms/BackgroundFrames/BackgroundFrames"
import CtaSection from "@/components/templates/CtaSection/CtaSection"

export default function Home() {
  return (
    <>
      <StyledContainer>
        <AnimatedFixedLogo />
        <BackgroundFrames />
        <Splash />
        <InfoSection />
      </StyledContainer>
      <TierSection />
      <CtaSection />
      <Footer />
    </>
  )
}
