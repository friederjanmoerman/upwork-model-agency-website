"use client"

// Components
import InfoPanel from "@/components/molecules/InfoPanel/InfoPanel"

// Styles
import { StyledSection } from "./InfoSection.styles"

// Properties
import { InfoPanelProps } from "./InfoSections.props"

const InfoSection = ({ setIsOpen }: InfoPanelProps) => {
  return (
    <StyledSection>
      <InfoPanel setIsOpen={setIsOpen}></InfoPanel>
    </StyledSection>
  )
}

export default InfoSection
