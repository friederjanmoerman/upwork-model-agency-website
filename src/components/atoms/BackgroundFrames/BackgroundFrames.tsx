"use client"

import React, { useEffect, useRef } from "react"
import { StyledCanvas, StyledOverlay, StyledBackgroundWrapper } from "./BackgroundFrames.styles"

const FRAME_COUNT = 167
const IMAGE_PATH = (index: number) =>
  `/stills/webp/Standard_Mode_camera_circles_around_subject_as${index.toString().padStart(3, "0")}.webp`

const BackgroundFrames = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const currentFrameIndex = useRef(0)

  // Preload all frames
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = Array.from({ length: FRAME_COUNT }, (_, i) => {
        return new Promise<HTMLImageElement>(resolve => {
          const img = new Image()
          img.src = IMAGE_PATH(i)
          img.onload = () => resolve(img)
        })
      })

      imagesRef.current = await Promise.all(imagePromises)
      drawFrame(0)
    }

    loadImages()
  }, [])

  // Draw a specific frame
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    const img = imagesRef.current[index]

    if (!canvas || !ctx || !img) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const canvasRatio = canvas.width / canvas.height
    const imgRatio = img.width / img.height

    let drawWidth, drawHeight, offsetX, offsetY

    if (imgRatio > canvasRatio) {
      // Image is wider than canvas
      drawHeight = canvas.height
      drawWidth = img.width * (canvas.height / img.height)
      offsetX = (canvas.width - drawWidth) / 2
      offsetY = 0
    } else {
      // Image is taller than canvas
      drawWidth = canvas.width
      drawHeight = img.height * (canvas.width / img.width)
      offsetX = 0
      offsetY = (canvas.height - drawHeight) / 2
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
  }

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight
      const scrollFraction = scrollTop / maxScroll
      const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(scrollFraction * FRAME_COUNT))

      if (frameIndex !== currentFrameIndex.current) {
        currentFrameIndex.current = frameIndex
        requestAnimationFrame(() => drawFrame(frameIndex))
      }

      // Handle overlay fade in
      if (overlayRef.current) {
        overlayRef.current.style.opacity = `${Math.max(0, Math.min(1, scrollFraction))}`
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <StyledBackgroundWrapper>
      <StyledCanvas ref={canvasRef} />
      <StyledOverlay ref={overlayRef} />
    </StyledBackgroundWrapper>
  )
}

export default BackgroundFrames
