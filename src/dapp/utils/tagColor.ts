/**
 * Ant Design Tag supported colors list
 */
export const TAG_COLORS = [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple',
    'pink',
] as const;

/**
 * Generate stable color index based on address
 * use simple hash algorithm to ensure same address always returns same color
 * 
 * @param address - address string (e.g. token contract address)
 * @returns Ant Design Tag color name
 */
export const getColorByAddress = (address: string): string => {
    // convert address to number and modulo, ensure same address always returns same color
    let hash = 0;
    for (let i = 0; i < address.length; i++) {
        hash = ((hash << 5) - hash) + address.charCodeAt(i);
        hash = hash & hash; // convert to 32-bit integer
    }
    const index = Math.abs(hash) % TAG_COLORS.length;
    return TAG_COLORS[index];
};

