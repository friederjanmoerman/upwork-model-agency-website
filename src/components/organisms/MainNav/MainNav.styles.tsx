"use client"

// MUI
import { AppBar, AppBarProps, styled, Toolbar, ToolbarProps } from "@mui/material"

export const StyledAppBar = styled(AppBar)<AppBarProps>(() => ({
  display: "flex",
  alignItems: "flex-end",
  margin: "0 auto",
}))

export const StyledToolbar = styled(Toolbar)<ToolbarProps>(() => ({
  display: "flex",
  justifyItems: "flex-end",
}))
