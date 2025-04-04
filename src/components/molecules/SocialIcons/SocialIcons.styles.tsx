"use client"

// MUI
import { styled, Toolbar, ToolbarProps } from "@mui/material"

export const StyledToolbar = styled(Toolbar)<ToolbarProps>(() => ({
  display: "flex",
  justifyItems: "flex-end",
}))
