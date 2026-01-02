import React from 'react';
import { motion } from 'framer-motion';

const FloatingTags = () => {
    const tags = [
        { text: "🧪 Science-Backed Nutrition", delay: 0 },
        { text: "🥩 Natural Ingredients", delay: 0.2 },
        { text: "🐶🐱🐦 For Dogs, Cats & Birds", delay: 0.4 },
    ];

    return (
        <div className="flex flex-wrap gap-3 mb-6">
            {tags.map((tag, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: -10, scale: 0.9 }}
                    animate={{
                        opacity: 1,
                        y: [0, -3, 0], // Subtle float loop
                        scale: 1
                    }}
                    transition={{
                        opacity: { duration: 0.5, delay: tag.delay },
                        scale: { duration: 0.5, delay: tag.delay },
                        y: {
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: tag.delay // Stagger the float start too
                        }
                    }}
                    whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}
                    className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700 border border-gray-100 shadow-sm cursor-default select-none pointer-events-auto"
                >
                    {tag.text}
                </motion.span>
            ))}
        </div>
    );
};

export default FloatingTags;
