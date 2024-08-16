import React from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    inputClasses?: string;
}
// input textarea filed


const Input: React.FC<InputProps> = ({ label, className = "", inputClasses, ...props }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {label && <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>}
            <input
                {...props}
                className={twMerge(`text-sm p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 ${inputClasses} w-full`)}
            />
        </div>
    );
};

export default Input;
