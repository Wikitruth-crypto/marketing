import * as THREE from 'three'
import { lon2xyz } from './math'
import waveMesh from './resources/static/waveMesh.png'

// export interface WaveMeshOptions {
//   color?: number
//   size?: number
//   opacity?: number
// }

/**
 * Create wave halo on sphere surface (Mesh), normal pointing outward, animation properties consistent with original
 */
export function createWaveMesh(
  R: number, 
  E: number, 
  N: number, 
  size = 1,
  themeColor: number | undefined = undefined
): THREE.Mesh {
  // Texture path adapted for public directory
  // const texture = new THREE.TextureLoader().load('./resources/static/waveMesh.png')
  const texture = new THREE.TextureLoader().load(waveMesh)
  // Plane geometry, size related to Earth radius
  const geometry = new THREE.PlaneGeometry(R * 0.16 * size, R * 0.16 * size)
  const color = themeColor || 0x22ffcc
  const material = new THREE.MeshBasicMaterial({
    color: color, // themeColor default 0x22ffcc
    map: texture,
    transparent: true,
    opacity: 1.0,
    side: THREE.DoubleSide,
    depthWrite: false,
  })
  const mesh = new THREE.Mesh(geometry, material)
  // Convert longitude/latitude to spherical coordinates
  const { x, y, z } = lon2xyz(R , E, N)
  mesh.position.set(x, y, z)
  // Mesh orientation setting, normal pointing toward sphere center
  const coordVec3 = new THREE.Vector3(x, y, z).normalize()
  const meshNormal = new THREE.Vector3(0, 0, 1)
  mesh.quaternion.setFromUnitVectors(meshNormal, coordVec3)
  // Animation properties
  // ;(mesh as any).size = R * 0.16 * size
  ;(mesh as any).size = 1.0 // Fixed to 1
  // ;(mesh as any)._s = Math.random() * 1.0 + 1.0
  ;(mesh as any)._s = Math.random() * 1.0 + 1.0
  return mesh
} 


// mesh._s += 0.007
// mesh.scale.set(mesh.size * mesh._s, mesh.size * mesh._s, mesh.size * mesh._s)
// if (mesh._s <= 1.5) {
//   mesh.material.opacity = (mesh._s - 1) * 2
// } else if (mesh._s > 1.5 && mesh._s <= 2) {
//   mesh.material.opacity = 1 - (mesh._s - 1.5) * 2
// } else {
//   mesh._s = 1.0
// }
