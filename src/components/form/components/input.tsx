import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input: React.FC<InputProps> = ({ label, className, ...props }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {label && <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>}
            <input
                {...props}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
        </div>
    );
};

export default Input;
