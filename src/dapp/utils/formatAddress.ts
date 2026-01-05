
export const formatAddress = (address: string, startLength: number = 4, endLength: number = 4): string => {
    if (!address || address.length <= startLength + endLength) {
        return address;
    }
    return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
};