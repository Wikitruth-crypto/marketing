"use client"

import { Tag } from 'antd';
import { cn } from "@/lib/utils";


export interface StatusLabelProps {
    status: string;
    className?: string;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    responsive?: boolean;
}

export default function StatusLabel({
    status,
    className,
    disabled = false,
    size = 'md',
    responsive = true
}: StatusLabelProps) {
    // Get the color corresponding to the status
    const getStatusColor = () => {
        if (disabled) {
            return 'default';
        }

        switch (status) {
            case 'Storing':
                return 'blue';
            case 'Selling':
            case 'Auctioning':
                return 'orange';
            case 'Paid':
                return 'green';
            case 'Refunding':
                return 'red';
            case 'Delaying':
                return 'purple';
            case 'Published':
                return 'lime';
            default:
                return 'blue';
        }
    };

    // Get size style
    const getSizeStyle = () => {
        switch (size) {
            case 'sm':
                return { fontSize: '12px', padding: '2px 8px' };
            case 'lg':
                return { fontSize: '16px', padding: '6px 12px' };
            default:
                return { fontSize: '14px', padding: '4px 10px' };
        }
    };

    return (
        <Tag
            color={getStatusColor()}
            className={cn(
                'font-mono font-medium whitespace-nowrap',
                responsive && 'text-xs sm:text-sm',
                className
            )}
            style={getSizeStyle()}
            title={status}
        >
            {status}
        </Tag>
    );
};




