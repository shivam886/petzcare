import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={hover ? { y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" } : {}}
            transition={{ duration: 0.3 }}
            className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
