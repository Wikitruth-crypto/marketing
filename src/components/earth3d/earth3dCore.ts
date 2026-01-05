import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { createEarth } from './earth'
import { createFlyGroup } from './flyGroup'
// import config from './config'
import { cityData } from './city'

interface Earth3DCoreOptions {
    isDisableZoom?: boolean
    isDisableRotate?: boolean
    isDisableMouseControl?: boolean
    themeColor?: string
    isWaveLevelOpen?: boolean
    levelColor?: string
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

export const defaultLevelColor = {
    low: 0xFFFF00,    // yellow
    middle: 0xFFA500,  // orange
    high: 0xFF0000    // red
}

/**
 * Get color value, supports theme color, specific color and level color
 */
function getColorValue(color: string | number): number {
    if (typeof color === 'string') {
        // If it's a hexadecimal string, convert to number
        if (color.startsWith('#')) {
            return parseInt(color.slice(1), 16)
        } else if (color.startsWith('0x')) {
            return Number(color);
        }
        // If it's a color name, return the corresponding hexadecimal value
        const colorMap: { [key: string]: number } = {
            'green': 0x22c55e,
            'blue': 0x1991fc,
            'red': 0xf32121,
            'yellow': 0xffff00,
            'cyan': 0x00ffff,
            'purple': 0x9333ea,
            'orange': 0xffb11b,
            'white': 0xffffff
        }
        return colorMap[color] || 0x22c55e
    }
    return color
}

/**
 * Get random level color
 */
function getRandomLevelColor(levelColors?: { low?: string | number; middle?: string | number; high?: string | number }): number {
    const colors = levelColors || defaultLevelColor
    const levels = [
        getColorValue(colors.low || defaultLevelColor.low),
        getColorValue(colors.middle || defaultLevelColor.middle),
        getColorValue(colors.high || defaultLevelColor.high)
    ]
    return levels[Math.floor(Math.random() * levels.length)]
}

/**
 * Earth3DCore main class, responsible for Earth visualization initialization, animation and cleanup
 */
export class Earth3DCore {
    private scene: THREE.Scene
    private camera: THREE.PerspectiveCamera
    private renderer: THREE.WebGLRenderer
    private controls: OrbitControls
    private earth: THREE.Group | undefined
    private flyGroup!: ReturnType<typeof createFlyGroup> // 使用 ! 断言，因为会在 initFlyGroup 中初始化
    private animationId: number | null = null
    private container: HTMLElement
    private width: number
    private height: number
    private options: Earth3DCoreOptions
    private themeColor: number
    private rotationSpeed: number

    constructor(container: HTMLElement, options: Earth3DCoreOptions = {}) {
        this.container = container
        this.width = container.clientWidth
        this.height = container.clientHeight
        this.options = options
        
        // Initialize color system
        this.themeColor = getColorValue(options.themeColor || 0x22ffcc)
        // Initialize rotation speed
        this.rotationSpeed = options.rotationSpeed || 0.001
        
        // Create scene
        this.scene = new THREE.Scene()
        // Create camera
        this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 2000)
        this.camera.position.set(0, 0, 500)
        this.camera.lookAt(0, 0, 0)
        // Create renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        this.renderer.setSize(this.width, this.height)
        this.renderer.setClearColor(0x000000, 0)
        this.container.appendChild(this.renderer.domElement)
        // Controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.enableDamping = true
        this.controls.dampingFactor = 0.05
        
        // Apply control parameters
        if (options.isDisableZoom) {
            this.controls.enableZoom = false
        }
        if (options.isDisableRotate) {
            this.controls.enableRotate = false
        }
        if (options.isDisableMouseControl) {
            this.controls.enabled = false // Completely disable mouse control
        }
        
        // Lights
        this.addLights()
        // Earth body
        this.initEarth() // Asynchronously initialize Earth
        // Fly lines, points, halos, cones, etc.
        this.initFlyGroup()
        // Animation loop
        this.animate = this.animate.bind(this)
        this.animate()
        // Window resize handling
        window.addEventListener('resize', this.handleResize)
    }

    private async initEarth() {
        const glowSize = this.options.glowSize || 40
        const earthScale = this.options.earthScale || 1.0
        this.earth = await createEarth(this.themeColor, 1.0, glowSize) // earthScale is applied externally
        // Apply Earth scaling
        this.earth.scale.set(earthScale, earthScale, earthScale)
        this.scene.add(this.earth)
        // Key: add flyGroup.group to earth
        this.earth.add(this.flyGroup.group)
    }

    private initFlyGroup() {
        // Determine color based on whether halo level is enabled
        const baseColor = this.options.isWaveLevelOpen ? 
            getRandomLevelColor(this.options.levelColors) : this.themeColor

        const flyData = {
            color: baseColor,
            start: cityData.start,
            levelColors: this.options.levelColors,
            endArr: cityData.endArr.map(item => ({
                ...item,
                size: Math.random() * 1,
                // If halo level is enabled, assign random level color to each point
                levelColor: this.options.isWaveLevelOpen ? getRandomLevelColor(this.options.levelColors) : baseColor
            }))
        }

        this.flyGroup = createFlyGroup(flyData)
    }

    /**
     * Add lights
     */
    private addLights() {
        const ambient = new THREE.AmbientLight(0xffffff, 0.7)
        this.scene.add(ambient)
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)
        dirLight.position.set(400, 200, 300)
        this.scene.add(dirLight)
        const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.6)
        dirLight2.position.set(-400, -200, -300)
        this.scene.add(dirLight2)
    }

    /**
     * Animation main loop
     */
    private animate() {
        this.animationId = requestAnimationFrame(this.animate)
        // Earth rotation
        if (this.earth) {
            this.earth.rotation.y += this.rotationSpeed
        }
        // Wave halo animation
        this.flyGroup.waveArr.forEach((mesh: any) => {
            mesh._s += 0.007
            mesh.scale.set(mesh._s, mesh._s, mesh._s)
            if (mesh._s <= 1.5) {
                mesh.material.opacity = (mesh._s - 1) * 2
            } else if (mesh._s > 1.5 && mesh._s <= 2) {
                mesh.material.opacity = 1 - (mesh._s - 1.5) * 2
            } else {
                mesh._s = 1.0
            }
        })
        // Render
        this.controls.update()
        this.renderer.render(this.scene, this.camera)
    }

    /**
     * Window resize handling
     */
    private handleResize = () => {
        this.width = this.container.clientWidth
        this.height = this.container.clientHeight
        this.camera.aspect = this.width / this.height
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(this.width, this.height)
    }

    /**
     * Dispose and cleanup
     */
    public dispose() {
        if (this.animationId) cancelAnimationFrame(this.animationId)
        window.removeEventListener('resize', this.handleResize)
        this.renderer.dispose()
        if (this.container && this.renderer.domElement.parentNode === this.container) {
            this.container.removeChild(this.renderer.domElement)
        }
    }
} 