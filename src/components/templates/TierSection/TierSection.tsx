"use client"

import { StyledSection, StyledTier } from "./TierSection.styles"
import Image from "next/image"

function TierSection() {
  return (
    <StyledSection container spacing={4}>
      <StyledTier>
        <Image src="/path/to/image1.png" alt="Elite Experience 1" width={50} height={50} />
        <h3>Elite Experience</h3>
        <p>
          3-6 daily AI Viking Videos. Personalized strategy sessions, dedicated messaging management, and ongoing
          content consultation. Massive platform reposts, reaching millions.
        </p>
      </StyledTier>

      <StyledTier>
        <Image src="/path/to/image2.png" alt="Elite Experience 2" width={50} height={50} />
        <h3>Elite Experience</h3>
        <p>
          3-6 daily AI Viking Videos. Personalized strategy sessions, dedicated messaging management, and ongoing
          content consultation. Massive platform reposts, reaching millions.
        </p>
      </StyledTier>

      <StyledTier>
        <Image src="/path/to/image3.png" alt="Elite Experience 3" width={50} height={50} />
        <h3>Elite Experience</h3>
        <p>
          3-6 daily AI Viking Videos. Personalized strategy sessions, dedicated messaging management, and ongoing
          content consultation. Massive platform reposts, reaching millions.
        </p>
      </StyledTier>
    </StyledSection>
  )
}

export default TierSection
