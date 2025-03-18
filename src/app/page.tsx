"use client"

import MainNav from "@/components/organisms/MainNav/MainNav"
import Splash from "@/components/templates/Splash/Splash"
import InfoSection from "@/components/templates/InfoSection/InfoSection"
import TierSection from "@/components/templates/TierSection/TierSection"

export default function Home() {
  return (
    <>
      <MainNav></MainNav>
      <Splash></Splash>
      <InfoSection></InfoSection>
      <TierSection></TierSection>
    </>
  )
}
