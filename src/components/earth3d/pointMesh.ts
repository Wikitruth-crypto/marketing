import * as THREE from 'three'
import { lon2xyz } from './math'
import meshTexture from './resources/static/mesh.png'

/**
 * Create annotation point on sphere surface (plane with texture, normal pointing outward)
 * @param R Sphere radius
 * @param E Longitude
 * @param N Latitude
 * @param size Point scale (optional, default 1)
 */
export function createPointMesh(
  R: number, 
  E: number, 
  N: number, 
  size = 1, 
  themeColor: string | number | undefined = undefined
): THREE.Mesh {
  // Texture path adapted for public directory (nextjs)
  // const texture = new THREE.TextureLoader().load('./resources/static/mesh.png')
  const texture = new THREE.TextureLoader().load(meshTexture)
  // Plane geometry
  const geometry = new THREE.PlaneGeometry(R * 0.05 * size, R * 0.05 * size)
  const color = themeColor || 0x22ffcc
  const material = new THREE.MeshBasicMaterial({
    color: color,
    map: texture,
    transparent: true,
    depthWrite: false,
  })
  const mesh = new THREE.Mesh(geometry, material)
  // Convert longitude/latitude to spherical coordinates
  const { x, y, z } = lon2xyz(R * 1.001, E, N)
  mesh.position.set(x, y, z)
  // Make plane normal point toward sphere center
  const coordVec3 = new THREE.Vector3(x, y, z).normalize()
  const meshNormal = new THREE.Vector3(0, 0, 1)
  mesh.quaternion.setFromUnitVectors(meshNormal, coordVec3)
  return mesh
} 