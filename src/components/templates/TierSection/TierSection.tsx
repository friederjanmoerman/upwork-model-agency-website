"use client"

import { Typography } from "@mui/material"
import { StyledSection, StyledTier, StyledTierIcon } from "./TierSection.styles"
import { useEffect, useRef, useState } from "react"

function TierSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [fadeInIndex, setFadeInIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Trigger sequential fade-in
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setFadeInIndex(prev => prev + 1)
      }, 300) // Delay each fade-in effect

      if (fadeInIndex >= 3) {
        clearInterval(interval)
      }

      return () => clearInterval(interval)
    }
  }, [isVisible, fadeInIndex])

  return (
    <StyledSection ref={sectionRef} container spacing={4}>
      <StyledTier className={fadeInIndex >= 1 ? "fade-in" : ""}>
        <StyledTierIcon src="/icons/icon__tier.svg" alt="Gold Tier 1" width={50} height={70} />
        <Typography color="secondary" variant="h3">
          Elite Experience
        </Typography>
        <Typography color="primary" variant="body1">
          3-6 daily AI Viking Videos. Personalized strategy sessions, dedicated messaging management, and ongoing
          content consultation. Massive platform reposts, reaching millions.
        </Typography>
      </StyledTier>
      <StyledTier className={fadeInIndex >= 2 ? "fade-in" : ""}>
        <StyledTierIcon src="/icons/icon__tier.svg" alt="Silver Tier 2" width={50} height={70} />
        <Typography color="secondary" variant="h3">
          Consistent Growth
        </Typography>
        <Typography color="primary" variant="body1">
          1-3 high-impact AI videos each day. Leverage our proven approach to boost engagement and grow your audience. A
          couple of strategic reposts daily to amplify your reach.
        </Typography>
      </StyledTier>
      <StyledTier className={fadeInIndex >= 3 ? "fade-in" : ""}>
        <StyledTierIcon src="/icons/icon__tier.svg" alt="Bronze Tier 3" width={50} height={70} />
        <Typography color="secondary" variant="h3">
          Introductory Launch
        </Typography>
        <Typography color="primary" variant="body1">
          One custom AI Viking video per week. One dedicated promotion per month on our platforms. Essential content
          planning advice to help you kickstart your journey.
        </Typography>
      </StyledTier>
    </StyledSection>
  )
}

export default TierSection
