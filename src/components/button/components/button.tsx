// Button.tsx

import React from 'react';
import { twMerge } from 'tailwind-merge';

// Define types for the button props
interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

// Create the Button component
const Button: React.FC<ButtonProps> = ({ onClick, children, className = '', disabled = false, type = 'button' }) => {
    const buttonClasses = "px-8 py-3 md:py-2 rounded text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-400";
    return (
        <button
            onClick={onClick}
            className={twMerge(buttonClasses, className)}
            disabled={disabled}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
