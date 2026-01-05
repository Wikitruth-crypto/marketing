import * as THREE from 'three'
import { createRadialGlowSVG } from './svg'

/**
 * Create Earth halo sprite
 * @param R Earth radius
 * @param themeColor Halo color
 * @param glowSize Size of createRadialGlowSVG
 */
export function createEarthSprite(
  R: number,
  themeColor: number | undefined = undefined,
  glowSize: number = 40
): THREE.Sprite {
  // Convert hexadecimal color to CSS color string
  const color = themeColor || 0x22ffcc
  const colorString = '#' + color.toString(16).padStart(6, '0')
  
  // Use SVG-generated radial gradient texture to replace PNG
  const texture = new THREE.TextureLoader().load(
    createRadialGlowSVG({
      color: colorString,
      size: glowSize,
      opacity: 1, 
    })
  )
  // Create sprite material object
  const spriteMaterial = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    opacity: 0.5, // Restore original opacity
  })
  // Create sprite model
  const sprite = new THREE.Sprite(spriteMaterial)
  sprite.scale.set(R * 3.3, R * 3.3, 1) // Increase scale to make halo larger
  return sprite
} 

