"use client"

import React, { useMemo } from 'react';
import { Typography, Space, Tooltip } from 'antd';
import {formatUnits} from 'viem'
import { formatAmount } from '@/dapp/utils/formatAmount';

export interface PriceTextProps {
    price: string | number | bigint;
    symbol?: string;
    decimals?: number;
    precision?: number; 
    showSymbol?: boolean;
    prefix?: string;
    suffix?: string;
    className?: string;
    style?: React.CSSProperties;
    unitPosition?: 'left' | 'right';
    variant?: 'default' | 'large' | 'small';
    theme?: 'default' | 'success' | 'warning' | 'error';
    responsive?: boolean;
}

const { Text } = Typography;

const PriceLabel: React.FC<PriceTextProps> = ({
    price,
    symbol = 'ETH',
    decimals = 18,
    precision = 3,// Precision, default 3 decimal places
    showSymbol = true,
    prefix = '', 
    suffix = '', 
    className = '',
    style = {},
    unitPosition = 'right',
    variant = 'default',
    theme = 'default',
    responsive = true,
}) => {
    // Format price display
    const formattedPrice = useMemo(() => {
        try {
            return formatAmount(price, decimals, precision);
        } catch (error) {
            console.error('Failed to format price:', error);
            return '0';
        }
    }, [price, decimals, precision]);

    // Get full price (for Tooltip)
    const fullPrice = useMemo(() => {
        try {
            const priceValue = typeof price === 'bigint' 
                ? price 
                : typeof price === 'string' 
                    ? (price.includes('n') ? BigInt(price.replace('n', '')) : BigInt(price))
                    : BigInt(Math.floor(Number(price) || 0));
            
            return formatUnits(priceValue, decimals);
        } catch {
            return formattedPrice;
        }
    }, [price, decimals, formattedPrice]);

    // Get theme type
    const getThemeType = (): 'success' | 'warning' | 'danger' | undefined => {
        switch (theme) {
            case 'success': return 'success';
            case 'warning': return 'warning';
            case 'error': return 'danger';
            default: return undefined;
        }
    };

    // Build price text
    const priceElement = (
        <Text
            strong={variant === 'large'}
            type={getThemeType()}
            style={{
                fontFamily: 'monospace',
                fontSize: variant === 'large' 
                    ? (responsive ? undefined : 20)
                    : variant === 'small'
                        ? (responsive ? undefined : 12)
                        : (responsive ? undefined : 16),
                ...style,
            }}
            className={className}
        >
            {formattedPrice}
        </Text>
    );

    // Symbol element
    const symbolElement = showSymbol && symbol ? (
        <Text
            type="secondary"
            style={{
                fontSize: variant === 'large' 
                    ? (responsive ? undefined : 14)
                    : variant === 'small'
                        ? (responsive ? undefined : 11)
                        : (responsive ? undefined : 12),
            }}
        >
            {symbol}
        </Text>
    ) : null;

    // Prefix element
    const prefixElement = prefix ? (
        <Text type="secondary" style={{ fontSize: 12 }}>
            {prefix}
        </Text>
    ) : null;

    // Suffix element
    const suffixElement = suffix ? (
        <Text type="secondary" style={{ fontSize: 12 }}>
            {suffix}
        </Text>
    ) : null;

    // Build content array
    const contentElements = [];
    
    if (unitPosition === 'left' && symbolElement) {
        contentElements.push(symbolElement);
    }
    
    if (prefixElement) {
        contentElements.push(prefixElement);
    }

    // Wrap price text (if full price is different, show Tooltip)
    const priceWithTooltip = fullPrice !== formattedPrice ? (
        <Tooltip title={fullPrice}>
            {priceElement}
        </Tooltip>
    ) : priceElement;
    
    contentElements.push(priceWithTooltip);
    
    if (suffixElement) {
        contentElements.push(suffixElement);
    }
    
    if (unitPosition === 'right' && symbolElement) {
        contentElements.push(symbolElement);
    }

    return (
        <Space 
            size={responsive ? 'middle' : 4}
            style={{ 
                // width: '100%',
                fontFamily: 'monospace',
            }}
        >
            {contentElements}
        </Space>
    );
};

export default PriceLabel; 