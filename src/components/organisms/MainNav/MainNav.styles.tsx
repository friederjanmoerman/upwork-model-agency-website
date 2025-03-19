"use client"

import { AppBar, AppBarProps, styled, Toolbar, ToolbarProps } from "@mui/material"

export const StyledAppBar = styled(AppBar)<AppBarProps>(() => ({
  display: "flex",
  alignItems: "flex-end",
  maxWidth: "1400px",
  padding: "0 5%",
  margin: "0 auto",
  background: "#fff",
}))

export const StyledToolbar = styled(Toolbar)<ToolbarProps>(() => ({
  display: "flex",
  justifyItems: "flex-end",
}))
