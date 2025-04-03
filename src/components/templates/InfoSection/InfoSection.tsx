"use client"

import InfoPanel from "@/components/molecules/InfoPanel/InfoPanel"
import { StyledSection } from "./InfoSection.styles"

type InfoPanelProps = {
  setIsOpen: (open: boolean) => void
}

function InfoSection({ setIsOpen }: InfoPanelProps) {
  return (
    <StyledSection>
      <InfoPanel setIsOpen={setIsOpen}></InfoPanel>
    </StyledSection>
  )
}

export default InfoSection
