import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge'

interface TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'link' | 'p' | 'div';
    component?: keyof JSX.IntrinsicElements;
    className?: string;
    children: ReactNode;
    [key: string]: any;
}

const Typography: React.FC<TypographyProps> = ({
    variant = 'body1',
    component = 'p',
    className = '',
    children,
    ...rest
}) => {
    // Determine the default component based on the variant
    const DefaultComponent = () => {
        switch (variant) {
            case 'h1':
                return 'h1';
            case 'h2':
                return 'h2';
            case 'h3':
                return 'h3';
            case 'h4':
                return 'h4';
            case 'h5':
                return 'h5';
            case 'h6':
                return 'h6';
            case 'body1':
                return 'p';
            case 'link':
                return 'a';
            case 'div':
                return 'div'
            default:
                return 'p';
        }
    };

    // Determine the component to render
    const Component = component || DefaultComponent();

    // Define Tailwind CSS classes based on the variant prop
    const getClasses = () => {
        switch (variant) {
            case 'h1':
                return 'text-3xl md:text-4xl font-bold text-gray-900';
            case 'h2':
                return 'text-2xl font-semibold text-gray-800';
            case 'h3':
                return 'text-xl font-semibold text-gray-700';
            case 'h4':
                return 'text-lg font-semibold text-gray-600';
            case 'h5':
                return 'text-base font-semibold text-gray-500';
            case 'h6':
                return 'text-sm font-semibold text-gray-400';
            case 'body1':
                return 'text-lg text-gray-700 leading-relaxed';
            case 'link':
                return 'text-blue-500 hover:text-blue-700';
            default:
                return 'text-base';
        }
    };

    // Combine default and custom classes
    const combinedClasses = twMerge('typography', getClasses(), className,);

    // Render component with Tailwind CSS classes
    return (
        <Component className={combinedClasses} {...rest}>
            {children}
        </Component>
    );
};

export default Typography;