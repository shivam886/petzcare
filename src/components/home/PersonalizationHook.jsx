import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PersonalizationHook = () => {
    const navigate = useNavigate();

    const pets = [
        { name: 'Dog', icon: '🐶', path: '/shop?category=dog' },
        { name: 'Cat', icon: '🐱', path: '/shop?category=cat' },
        { name: 'Bird', icon: '🐦', path: '/shop?category=bird' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10 pt-6 border-t border-gray-100"
        >
            <p className="text-sm text-gray-400 font-medium mb-3">What pet are you shopping for today?</p>
            <div className="flex gap-3">
                {pets.map((pet, index) => (
                    <motion.button
                        key={index}
                        whileHover={{ y: -3, backgroundColor: '#EFF6FF' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate(pet.path)}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-blue-200 transition-colors"
                    >
                        <span className="text-lg">{pet.icon}</span>
                        <span className="text-sm font-semibold text-gray-700">{pet.name}</span>
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
};

export default PersonalizationHook;
