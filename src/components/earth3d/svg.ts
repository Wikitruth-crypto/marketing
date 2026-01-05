
export interface RadialGlowOptions {
    color?: string 
    size?: number 
    opacity?: number 
    // blur?: number 
}

export function createRadialGlowSVG(options: RadialGlowOptions = {}): string {
    const {
        color = '#22ffcc',
        size = 100,
        opacity = 0.8,
        // blur = 20
    } = options

    const svg = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="radialGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${color}" stop-opacity="${opacity}"/>
          <stop offset="30%" stop-color="${color}" stop-opacity="${opacity * 0.7}"/>
          <stop offset="60%" stop-color="${color}" stop-opacity="${opacity * 0.3}"/>
          <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="url(#radialGlow)"/>
    </svg>
  `

    return `data:image/svg+xml;base64,${btoa(svg.trim())}`
}

/**
 * Create SVG texture usable by Three.js texture loader
 */
export function createRadialGlowTexture(options: RadialGlowOptions = {}): string {
    return createRadialGlowSVG(options)
}

