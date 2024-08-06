import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}



const Textarea: React.FC<TextAreaProps> = ({ label, className, ...props }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {label && <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>}
            <textarea
                {...props}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
        </div>
    );
};

export default Textarea;
