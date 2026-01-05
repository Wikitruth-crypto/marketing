
export const formatBalance = (balance: string, decimalPlaces: number = 3): string => {
    try {
        const num = parseFloat(balance);
        if (isNaN(num)) return balance;
        return num.toFixed(decimalPlaces);
    } catch (error) {
        return balance;
    }
};

