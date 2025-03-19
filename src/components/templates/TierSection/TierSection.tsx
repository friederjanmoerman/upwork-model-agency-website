"use client"

import { Typography } from "@mui/material"
import { StyledSection, StyledTier, StyledTierIcon } from "./TierSection.styles"

function TierSection() {
  return (
    <StyledSection container spacing={4}>
      <StyledTier>
        <StyledTierIcon src="/icons/icon__tier.svg" alt="Gold Tier 1" width={50} height={70} />
        <Typography color="secondary" variant="h3">
          Elite Experience
        </Typography>
        <Typography color="primary" variant="body1">
          3-6 daily AI Viking Videos. Personalized strategy sessions, dedicated messaging management, and ongoing
          content consultation. Massive platform reposts, reaching millions.
        </Typography>
      </StyledTier>
      <StyledTier>
        <StyledTierIcon src="/icons/icon__tier.svg" alt="Silver Tier 2" width={50} height={70} />
        <Typography color="secondary" variant="h3">
          Consistent Growth
        </Typography>
        <Typography color="primary" variant="body1">
          1-3 high-impact AI videos each day. Leverage our proven approach to boost engagement and grow your audience. A
          couple of strategic reposts daily to amplify your reach.
        </Typography>
      </StyledTier>
      <StyledTier>
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
