"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface BubbleProps {
  x: number
  y: number
  delay: number
  colIndex: number
  rowIndex: number
  shouldOpen: boolean
}

// Adjust bubble size based on screen size
const useBubbleSize = () => {
  const [size, setSize] = useState(60.5)

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) {
          setSize(20) // Smaller on mobile
        } else if (window.innerWidth < 1024) {
          setSize(40) // Medium on tablets
        } else {
          setSize(60.5) // Full size on desktop
        }
      }
    }

    // Set initial size
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return size
}

const COLUMNS = 20 // Number of vertical lines
const ROWS = 12 // Number of bubbles per line

export default function BubbleBackground() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null)
  const [initialAnimationComplete, setInitialAnimationComplete] = useState(false)
  const bubblesRef = useRef<BubbleProps[]>([])
  const [bubbleStates, setBubbleStates] = useState<boolean[]>([])
  const BUBBLE_SIZE = useBubbleSize()

  // Generate bubbles only once on component mount
  useEffect(() => {
    const bubbles: BubbleProps[] = []

    // Create vertical lines of evenly spaced bubbles
    for (let col = 0; col < COLUMNS; col++) {
      const x = 5 + col * (90 / (COLUMNS - 1)) // Evenly space columns across 90% of the width

      for (let row = 0; row < ROWS; row++) {
        // Evenly space rows
        const y = 8 + row * (84 / (ROWS - 1)) // Evenly space rows across 84% of the height

        // Stagger the delays for a more interesting animation but 3x faster
        const delay = (500 + (col + row) * 100) / 3

        // Randomly determine if this bubble should open (about 70%)
        const shouldOpen = Math.random() < 0.7

        bubbles.push({ x, y, delay, colIndex: col, rowIndex: row, shouldOpen })
      }
    }

    bubblesRef.current = bubbles

    // Initialize bubble states based on shouldOpen
    setBubbleStates(bubbles.map((bubble) => bubble.shouldOpen))

    // Enable interactivity after a shorter time (also 3x faster)
    const timer = setTimeout(() => {
      setInitialAnimationComplete(true)
    }, 2000 / 3)

    return () => clearTimeout(timer)
  }, [])

  // Handle mouse move to track cursor position
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!initialAnimationComplete) return

    // Get mouse position relative to the container
    const container = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - container.left) / container.width) * 100
    const y = ((e.clientY - container.top) / container.height) * 100

    setMousePosition({ x, y })

    // Update bubble states based on cursor proximity
    if (bubblesRef.current.length > 0) {
      setBubbleStates((prev) => {
        const newStates = [...prev]

        bubblesRef.current.forEach((bubble, index) => {
          // Calculate distance from cursor to bubble
          const dx = Math.abs(bubble.x - x)
          const dy = Math.abs(bubble.y - y)

          // Check if bubble is within the 5x5 grid around cursor
          // Convert percentage distances to grid cell distances
          const colDistance = dx / (90 / (COLUMNS - 1))
          const rowDistance = dy / (84 / (ROWS - 1))

          if (colDistance <= 2 && rowDistance <= 2) {
            // Toggle the bubble state
            newStates[index] = !bubble.shouldOpen
          } else {
            // Reset to original state
            newStates[index] = bubble.shouldOpen
          }
        })

        return newStates
      })
    }
  }

  // Reset bubble states when mouse leaves
  const handleMouseLeave = () => {
    setMousePosition(null)

    // Reset all bubbles to their original states
    if (bubblesRef.current.length > 0) {
      setBubbleStates(bubblesRef.current.map((bubble) => bubble.shouldOpen))
    }
  }

  return (
    <div
      className="relative w-full h-full pointer-events-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Vertical lines */}
      {Array.from({ length: COLUMNS }).map((_, index) => (
        <div
          key={`line-${index}`}
          className="absolute h-full w-px bg-blue-900/30"
          style={{ left: `${5 + index * (90 / (COLUMNS - 1))}%` }}
        />
      ))}

      {/* Bubbles */}
      {bubblesRef.current.map((bubble, index) => (
        <BubbleItem key={index} {...bubble} isOpen={bubbleStates[index] || false} size={BUBBLE_SIZE} />
      ))}
    </div>
  )
}

interface BubbleItemProps extends BubbleProps {
  isOpen: boolean
  size: number
}

const BubbleItem = ({ x, y, delay, isOpen, size }: BubbleItemProps) => {
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  // Only animate if initial animation has completed or if it's time for this bubble
  const shouldAnimate = hasAnimated

  return (
    <div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)", // Center the bubble
      }}
    >
      <motion.div
        className="absolute bg-blue-600 rounded-full blur-[0.5px] opacity-85"
        style={{
          left: "0",
          top: "0",
          transform: "translate(-50%, -50%)", // Center the bubble
        }}
        initial={{ width: 2, height: size }} // Start as a vertical line
        animate={
          shouldAnimate
            ? {
                width: isOpen ? size : 2, // Toggle between circle and vertical line
                height: size,
                borderRadius: isOpen ? "50%" : "1px", // Adjust border radius for line vs circle
              }
            : {}
        }
        transition={{ duration: 0.13 }}
        aria-label="Interactive bubble"
      />
    </div>
  )
}

