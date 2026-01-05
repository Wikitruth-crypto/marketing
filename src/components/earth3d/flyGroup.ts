
import * as THREE from 'three'
import { createPointMesh } from './pointMesh'
import { createWaveMesh } from './WaveMesh'
import config from './config'
// import { ColorType } from './earth3dCore'

// Example data structure, can be adjusted as needed
export interface FlyData {
  color: number,
  start: { E: number; N: number }
  endArr: { E: number; N: number; size: number; levelColor?: number }[]
  levelColors?: {
    low?: string | number
    middle?: string | number
    high?: string | number
  }
}

/**
 * Batch assemble fly lines, points, halos, cones and other effects
 */
export function createFlyGroup(data: FlyData) {
  const R = config.R
  const group = new THREE.Group()
  // const flyArr: THREE.Group[] = [] // Collection of all fly lines
  const waveArr: THREE.Mesh[] = [] // Collection of all wave halos
  
  // Starting point static dot
  const startMesh = createPointMesh(R , data.start.E, data.start.N, 1, data.color)
  group.add(startMesh)
  // Starting point wave halo
  const startWaveMesh = createWaveMesh(R , data.start.E, data.start.N, 1, data.color)
  group.add(startWaveMesh)
  waveArr.push(startWaveMesh)
  // Batch add end point fly lines, points, halos
  data.endArr.forEach(coord => {
    // End point static dot
    const pointColor = coord.levelColor || data.color // Use level color or default color
    const mesh = createPointMesh(R, coord.E, coord.N, coord.size, pointColor)
    group.add(mesh)
    // End point wave halo - use the same color as the point
    const waveMesh = createWaveMesh(R, coord.E, coord.N, coord.size, pointColor)
    group.add(waveMesh)
    waveArr.push(waveMesh)
  })
  return { 
    group, 
    // flyArr, 
    waveArr, 
    // coneMesh 
  }
} 
