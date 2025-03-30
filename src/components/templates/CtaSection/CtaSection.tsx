"use client"
import ButtonCustom from "@/components/atoms/ButtonCustom/ButtonCustom"
import { StyledContainerCtaSection } from "./CtaSection.styles"

type CtaSectionProps = {
  setIsOpen: (open: boolean) => void
}

export function CtaSection({ setIsOpen }: CtaSectionProps) {
  return (
    <StyledContainerCtaSection>
      <ButtonCustom onClick={() => setIsOpen(true)}>Apply Now</ButtonCustom>
    </StyledContainerCtaSection>
  )
}

export default CtaSection
