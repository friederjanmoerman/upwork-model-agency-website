"use client"

import Splash from "@/components/templates/Splash/Splash"
import InfoSection from "@/components/templates/InfoSection/InfoSection"
import TierSection from "@/components/templates/TierSection/TierSection"
import { StyledContainer } from "./page.styles"
import Logo from "@/components/atoms/Logo/Logo"

export default function Home() {
  return (
    <StyledContainer>
      <Logo></Logo>
      <Splash></Splash>
      <InfoSection></InfoSection>
      <TierSection></TierSection>
    </StyledContainer>
  )
}
