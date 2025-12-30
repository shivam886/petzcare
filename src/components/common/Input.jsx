import React from 'react';

const Input = ({ label, error, className = '', ...props }) => {
    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {label && <label className="text-sm font-medium text-gray-700 font-sans">{label}</label>}
            <input
                className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all font-sans
          ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 hover:border-gray-300'}
        `}
                {...props}
            />
            {error && <span className="text-xs text-red-500 font-sans">{error}</span>}
        </div>
    );
};

export default Input;
