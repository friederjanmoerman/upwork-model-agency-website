"use client"

// React
import { useEffect, useRef, useState } from "react"

// MUI
import { Typography } from "@mui/material"

// Styles
import { StyledContainer } from "@/app/page.styles"
import {
  StyledContainerFollowerSection,
  StyledSection,
  StyledFollower,
  StyledFollowerCount,
} from "./FollowerSection.styles"

const animateCount = (target: number, duration: number, setter: (val: number) => void) => {
  let start = 0
  const increment = target / (duration / 16)

  const step = () => {
    start += increment
    if (start >= target) {
      setter(target)
    } else {
      setter(Math.floor(start))
      requestAnimationFrame(step)
    }
  }
  requestAnimationFrame(step)
}

const FollowerSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [fadeInIndex, setFadeInIndex] = useState(0)

  const [tiktokFollowers, setTiktokFollowers] = useState(0)
  const [instagramFollowers, setInstagramFollowers] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isVisible) {
      interval = setInterval(() => {
        setFadeInIndex(prev => {
          if (prev >= 3) {
            clearInterval(interval)
            return prev
          }
          return prev + 1
        })
      }, 300)
    }
    return () => clearInterval(interval)
  }, [isVisible])

  useEffect(() => {
    if (fadeInIndex === 2 && tiktokFollowers === 0) {
      animateCount(700000, 1000, setTiktokFollowers)
    }
    if (fadeInIndex === 3 && instagramFollowers === 0) {
      animateCount(855000, 1000, setInstagramFollowers)
    }
  }, [fadeInIndex, tiktokFollowers, instagramFollowers])

  return (
    <StyledContainerFollowerSection>
      <StyledContainer>
        <StyledSection ref={sectionRef} container spacing={{ xs: 2, md: 4 }}>
          <StyledFollower item md={6} className={fadeInIndex >= 2 ? "fade-in" : ""}>
            <Typography color="secondary" variant="h3">
              You&apos;ll be exposed to
            </Typography>
            <StyledFollowerCount>{tiktokFollowers.toLocaleString("de-DE")}</StyledFollowerCount>
            <Typography color="secondary" variant="h3">
              Tiktok followers
            </Typography>
          </StyledFollower>
          <StyledFollower item md={6} className={fadeInIndex >= 3 ? "fade-in" : ""}>
            <Typography color="secondary" variant="h3">
              You&apos;ll be exposed to
            </Typography>
            <StyledFollowerCount>{instagramFollowers.toLocaleString("de-DE")}</StyledFollowerCount>
            <Typography color="secondary" variant="h3">
              Instagram followers
            </Typography>
          </StyledFollower>
        </StyledSection>
      </StyledContainer>
    </StyledContainerFollowerSection>
  )
}

export default FollowerSection
