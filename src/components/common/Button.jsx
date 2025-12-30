import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-primary text-white hover:bg-green-600 shadow-md hover:shadow-lg",
        secondary: "bg-secondary text-primary hover:bg-blue-100",
        accent: "bg-accent text-dark hover:bg-yellow-400",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "bg-transparent text-dark hover:bg-gray-100"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
