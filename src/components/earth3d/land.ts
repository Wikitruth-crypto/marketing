import { lon2xyz } from './math'
import world from './resources/json/world.json'
import * as THREE from 'three'

/**
 * Check if point is inside polygon (ray casting algorithm)
 */
function isPointInPolygon(longitude: number, latitude: number, polygon: number[][]): boolean {
    let inside = false
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i]
        const [xj, yj] = polygon[j]
        
        const intersect = ((yi > latitude) !== (yj > latitude)) &&
            (longitude < (xj - xi) * (latitude - yi) / (yj - yi) + xi)
        if (intersect) inside = !inside
    }
    return inside
}

/**
 * Check if point is in any land area (using detailed world map data)
 */
function isPointOnLand(longitude: number, latitude: number): boolean {
    if (!world.features || world.features.length === 0) return false
    
    // Traverse all country/region boundaries
    for (const feature of world.features) {
        const geometry = feature.geometry
        
        if (geometry.type === 'Polygon') {
            // Single polygon: coordinates is [ring1, ring2, ...], ring1 is outer ring
            const ring = geometry.coordinates[0] as number[][]
            const coords: number[][] = ring.map((coord: number[]) => [coord[0], coord[1]])
            if (isPointInPolygon(longitude, latitude, coords)) {
                return true
            }
        } else if (geometry.type === 'MultiPolygon') {
            // Multiple polygons: coordinates is [[[ring1], [ring2]], ...]
            for (const polygonGroup of geometry.coordinates) {
                for (const polygon of polygonGroup) {
                    const ring = polygon as number[][]
                    const coords: number[][] = ring.map((coord: number[]) => [coord[0], coord[1]])
                    if (isPointInPolygon(longitude, latitude, coords)) {
                        return true
                    }
                }
            }
        }
    }
    return false
}

/**
 * Create uniformly distributed dots in land areas (based on uniform distribution of spherical area)
 */
export function createLandDots(R: number): THREE.Group {
    const group = new THREE.Group()
    const dotSize = R * 0.008 // Dot size (relative to sphere radius) - smaller
    const baseSpacing = 2.5 // Base longitude/latitude interval (degrees) - denser
    const dotColor = 0x808080 // Gray
    
    // Use uniform distribution based on spherical area
    // Use smaller longitude interval near equator, larger near poles
    for (let lat = -85; lat <= 85; lat += baseSpacing) {
        // Adjust longitude interval based on latitude to make dots uniformly distributed on sphere
        // Near equator: smaller interval; near poles: larger interval
        const latRad = (lat * Math.PI) / 180
        const lonSpacing = baseSpacing / Math.cos(latRad)
        const adjustedSpacing = Math.max(baseSpacing, Math.min(lonSpacing, baseSpacing * 3))
        
        for (let lon = -180; lon <= 180; lon += adjustedSpacing) {
            // Check if point is on land
            if (isPointOnLand(lon, lat)) {
                // Create dot
                const dot = createDot(R, lon, lat, dotSize, dotColor)
                group.add(dot)
            }
        }
    }
    
    return group
}

/**
 * Create single dot (gray)
 */
function createDot(
    R: number,
    longitude: number,
    latitude: number,
    size: number,
    color: number
): THREE.Mesh {
    // Use circle geometry
    const geometry = new THREE.CircleGeometry(size, 16)
    const material = new THREE.MeshBasicMaterial({
        color: color, // Gray
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide,
    })
    const mesh = new THREE.Mesh(geometry, material)
    
    // Convert longitude/latitude to spherical coordinates
    const { x, y, z } = lon2xyz(R * 1.001, longitude, latitude)
    mesh.position.set(x, y, z)
    
    // Make dot normal point toward sphere center
    const coordVec3 = new THREE.Vector3(x, y, z).normalize()
    const meshNormal = new THREE.Vector3(0, 0, 1)
    mesh.quaternion.setFromUnitVectors(meshNormal, coordVec3)
    
    return mesh
} 