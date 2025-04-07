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

// Dynamic calculation of bubble parameters based on viewport
const useResponsiveBubbleLayout = () => {
  const [layout, setLayout] = useState({
    bubbleSize: 60.5,
    columns: 20,
    rows: 12
  })

  useEffect(() => {
    const calculateLayout = () => {
      if (typeof window === "undefined") return
      
      // Get viewport dimensions
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      
      // Calculate optimal bubble size and count
      let columns, rows, bubbleSize
      
      // Base calculations on viewport width
      if (viewportWidth < 480) {
        // Mobile phone
        columns = 8
      } else if (viewportWidth < 768) {
        // Larger mobile/small tablet
        columns = 12
      } else if (viewportWidth < 1024) {
        // Tablet
        columns = 16
      } else {
        // Desktop
        columns = 20
      }
      
      // Calculate rows based on aspect ratio - increase density by using 0.9 multiplier
      const aspectRatio = viewportHeight / viewportWidth
      rows = Math.max(10, Math.floor(columns * aspectRatio * 0.9))
      
      // Use more of the screen height (95% instead of 84%)
      const horizontalSpacing = 90 / (columns - 1)
      const verticalSpacing = 95 / (rows - 1)
      
      // Convert percentage spacing to pixels
      const horizontalPixels = (horizontalSpacing / 100) * viewportWidth
      const verticalPixels = (verticalSpacing / 100) * viewportHeight
      
      // Calculate bubble size to ensure touching
      bubbleSize = Math.min(horizontalPixels, verticalPixels) * 1.02 * 0.8
      
      setLayout({ bubbleSize, columns, rows })
    }

    // Calculate initial layout
    calculateLayout()
    
    // Recalculate on resize with debounce for performance
    let resizeTimer: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(calculateLayout, 100)
    }
    
    window.addEventListener("resize", handleResize)
    
    return () => {
      clearTimeout(resizeTimer)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return layout
}

export default function BubbleBackground() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null)
  const [initialAnimationComplete, setInitialAnimationComplete] = useState(false)
  const bubblesRef = useRef<BubbleProps[]>([])
  const [bubbleStates, setBubbleStates] = useState<boolean[]>([])
  const { bubbleSize: BUBBLE_SIZE, columns: COLUMNS, rows: ROWS } = useResponsiveBubbleLayout()

  // Generate bubbles when layout changes
  useEffect(() => {
    const bubbles: BubbleProps[] = []

    // Create vertical lines of evenly spaced bubbles
    for (let col = 0; col < COLUMNS; col++) {
      const x = 5 + col * (90 / (COLUMNS - 1)) // Evenly space columns across 90% of the width

      for (let row = 0; row < ROWS; row++) {
        // Evenly space rows - use 95% of the height for denser vertical spacing
        const y = 5 + row * (95 / (ROWS - 1)) 

        // Stagger the delays for a more interesting animation
        const delay = (500 + (col + row) * 100) / 3

        // Randomly determine if this bubble should open (about 51%)
        const shouldOpen = Math.random() < 0.51

        bubbles.push({ x, y, delay, colIndex: col, rowIndex: row, shouldOpen })
      }
    }

    bubblesRef.current = bubbles

    // Initialize bubble states based on shouldOpen
    setBubbleStates(bubbles.map((bubble) => bubble.shouldOpen))

    // Enable interactivity after initial animation
    const timer = setTimeout(() => {
      setInitialAnimationComplete(true)
    }, 2000 / 3)

    return () => clearTimeout(timer)
  }, [COLUMNS, ROWS]) // Regenerate when layout changes

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

          // Dynamic proximity based on column/row spacing
          const colSpacing = 90 / (COLUMNS - 1)
          const rowSpacing = 95 / (ROWS - 1)
          
          // Scale proximity based on screen size
          const proximityFactor = window.innerWidth < 768 ? 1.2 : 2
          const colDistance = dx / colSpacing 
          const rowDistance = dy / rowSpacing

          if (colDistance <= proximityFactor && rowDistance <= proximityFactor) {
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
        transition={{ duration: 0.06 }}
        aria-label="Interactive bubble"
      />
    </div>
  )
}

