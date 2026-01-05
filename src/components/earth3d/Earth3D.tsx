import React, { useRef, useEffect } from 'react'
import { Earth3DCore } from './earth3dCore'

interface Earth3DProps {
  className?: string
  style?: React.CSSProperties
  // Whether to disable zoom
  isDisableZoom?: boolean
  // Whether to disable rotation
  isDisableRotate?: boolean
  // Whether to disable mouse control
  isDisableMouseControl?: boolean
  // Theme color
  themeColor?: string
  // Whether to enable halo level
  isWaveLevelOpen?: boolean
  // Earth size scale (default 1.0)
  earthScale?: number
  // Size of createRadialGlowSVG (default 40)
  glowSize?: number
  // 3 level wave halo colors { low, middle, high }
  levelColors?: {
    low?: string | number
    middle?: string | number
    high?: string | number
  }
  // Rotation speed (default 0.001)
  rotationSpeed?: number
}


/**
 * Earth3D Component: 3D Earth visualization component for direct use in React/Next.js
 */
const Earth3D: React.FC<Earth3DProps> = ({ 
  className = '', 
  style = {}, 
  isDisableZoom = false, 
  isDisableRotate = false,
  isDisableMouseControl = false,
  themeColor,
  isWaveLevelOpen = false,
  earthScale = 1.0,
  glowSize = 40,
  levelColors,
  rotationSpeed = 0.001,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const coreRef = useRef<Earth3DCore | null>(null)

  useEffect(() => {
    // Initialize Three.js Earth main class
    if (containerRef.current && !coreRef.current) {
      coreRef.current = new Earth3DCore(containerRef.current, {
        isDisableZoom,
        isDisableRotate,
        isDisableMouseControl,
        themeColor,
        isWaveLevelOpen,
        earthScale,
        glowSize,
        levelColors,
        rotationSpeed,
      })
    }
    // Clean up resources on unmount
    return () => {
      if (coreRef.current) {
        coreRef.current.dispose()
        coreRef.current = null
      }
    }
  }, [isDisableZoom, isDisableRotate, isDisableMouseControl, themeColor, isWaveLevelOpen, earthScale, glowSize, levelColors, rotationSpeed])

  return (
    <div
      ref={containerRef}
      className={`w-full h-full ${className}`}
      style={style}
    />
  )
}

export default Earth3D 