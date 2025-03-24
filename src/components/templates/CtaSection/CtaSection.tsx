"use client"
import ButtonCustom from "@/components/atoms/ButtonCustom/ButtonCustom"
import ModalForm from "@/components/organisms/Form/ModalForm"
import React, { useState } from "react"
import { StyledContainerCtaSection } from "./CtaSection.styles"

export function CtaSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <StyledContainerCtaSection>
      <ButtonCustom onClick={() => setIsOpen(true)}>Apply Now</ButtonCustom>
      <ModalForm open={isOpen} handleClose={() => setIsOpen(false)} />
    </StyledContainerCtaSection>
  )
}

export default CtaSection
