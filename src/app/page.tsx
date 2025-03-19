"use client"

import Splash from "@/components/templates/Splash/Splash"
import InfoSection from "@/components/templates/InfoSection/InfoSection"
import TierSection from "@/components/templates/TierSection/TierSection"
import { StyledContainer } from "./page.styles"
import AnimatedFixedLogo from "@/components/molecules/AnimatedFixedLogo/AnimatedFixedLogo"

export default function Home() {
  return (
    <StyledContainer>
      <AnimatedFixedLogo />
      <Splash></Splash>
      <InfoSection></InfoSection>
      <TierSection></TierSection>
    </StyledContainer>
  )
}
