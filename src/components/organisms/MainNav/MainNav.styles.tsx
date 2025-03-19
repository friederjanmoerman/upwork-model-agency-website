"use client"

import { AppBar, AppBarProps, styled, Toolbar, ToolbarProps } from "@mui/material"

export const StyledAppBar = styled(AppBar)<AppBarProps>(() => ({
  display: "flex",
  alignItems: "flex-end",
  margin: "0 auto",
  background: "#fff",
}))

export const StyledToolbar = styled(Toolbar)<ToolbarProps>(() => ({
  display: "flex",
  justifyItems: "flex-end",
}))
