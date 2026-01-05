// Longitude/latitude to spherical coordinates utility function
// import * as THREE from 'three'

/**
 * Convert longitude/latitude coordinates to spherical coordinates
 */
export function lon2xyz(R: number, longitude: number, latitude: number) {
    let lon = longitude * Math.PI / 180; // Convert to radians
    let lat = latitude * Math.PI / 180; // Convert to radians
    lon = -lon; // three.js coordinate system z-axis corresponds to longitude -90 degrees

    // Formula for converting longitude/latitude coordinates to spherical coordinates
    const x = R * Math.cos(lat) * Math.cos(lon);
    const y = R * Math.sin(lat);
    const z = R * Math.cos(lat) * Math.sin(lon);
    return { x, y, z };
} 