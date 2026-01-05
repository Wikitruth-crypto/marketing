import * as THREE from 'three'
import { createEarthSprite } from './sprite'
import config from './config'
import { createLandDots } from './land'

/**
 * Create Earth overall Group, including sphere, dots, halos, etc.
 */
export async function createEarth(
    themeColor: number | undefined = undefined,
    earthScale: number = 1.0,
    glowSize: number = 40,
): Promise<THREE.Group> {
    const R = config.R
    const earth = new THREE.Group()
    const color = themeColor || 0x009999
    
    // Create sphere (black background)
    earth.add(createSphereMesh(R))
    
    // Create dots (distributed in land areas, gray)
    const dotsGroup = createLandDots(R)
    earth.add(dotsGroup)
    
    earth.add(createEarthSprite(R, color, glowSize)) // Pass color parameter and glowSize to Earth halo
    return earth
}

/**
 * Create Earth sphere Mesh (using black background, opaque)
 */
function createSphereMesh(r: number): THREE.Mesh {
    const geometry = new THREE.SphereGeometry(r, 40, 40)
    const material = new THREE.MeshLambertMaterial({
        color: 0x000000, // Black
    })
    return new THREE.Mesh(geometry, material)
}
