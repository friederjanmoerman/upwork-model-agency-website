// src/components/organisms/Footer/Footer.tsx

"use client"
import React from "react"
import { Link } from "@mui/material"
import SocialIcons from "@/components/molecules/SocialIcons/SocialIcons"
import { FooterContainer } from "./Footer.styles"

export function Footer() {
  return (
    <FooterContainer>
      <Link
        href="mailto:hello@example.com"
        underline="none"
        color="inherit"
        sx={{ display: "flex", alignItems: "center", gap: 0.5, fontWeight: "bold" }}
      >
        <span>hello@example.com</span>
      </Link>

      <SocialIcons />
    </FooterContainer>
  )
}

export default Footer
