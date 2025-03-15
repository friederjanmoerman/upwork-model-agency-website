"use client"

import { Box, BoxProps, styled, Toolbar, ToolbarProps } from "@mui/material"

export const StyledHeader = styled(Box)<BoxProps>(() => ({}))

export const StyledToolbar = styled(Toolbar)<ToolbarProps>(() => ({
  display: "flex",
  justifyItems: "flex-end",
}))
