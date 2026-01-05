import { formatUnits } from "viem";
/**
 * @example
 * formatAmount(1000000000000000000n, 18) // "1.000"
 * formatAmount(1500000n, 18) // "1.50K"
 * formatAmount(2500000000n, 18) // "2.50M"
 */
export function formatAmount(
    amount: string | bigint | number, 
    decimals: number = 18, 
    precision: number = 3,
    // thousandSeparator: boolean = true,
): string {
    if (!amount || amount === '0' || amount === '0n') {
        return '0.000';
    }

    try {
        // if string, replace 'n' and convert to BigInt
        const amountBigInt = typeof amount === 'string' && amount.includes('n') 
            ? BigInt(amount.replace('n', ''))
            : typeof amount === 'string' 
                ? BigInt(amount)
                : typeof amount === 'bigint'
                    ? amount
                    : BigInt(Math.floor(amount));

        // use viem's formatUnits to format, convert base unit to decimal
        const formatted = formatUnits(amountBigInt, decimals);
        const numValue = parseFloat(formatted);

        // choose appropriate display format based on amount size
        if (numValue >= 1e6) {
            return `${(numValue / 1e6).toFixed(2)}M`;
        }
        if (numValue >= 1e3) {
            return `${(numValue / 1e3).toFixed(2)}K`;
        }

        // use specified decimalLength, not hardcoded 3
        return numValue.toFixed(precision);
    } catch (error) {
        console.error('Failed to format amount:', error);
        return '0.000';
    }
}