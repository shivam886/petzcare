import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, HeartPulse } from 'lucide-react';

const TrustIndicators = () => {
    const indicators = [
        { icon: <ShieldCheck size={18} />, text: "Vet-Informed Recipes" },
        { icon: <Leaf size={18} />, text: "No Artificial Preservatives" },
        { icon: <HeartPulse size={18} />, text: "Balanced for Daily Nutrition" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 mb-8"
        >
            {indicators.map((item, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="flex items-center gap-2 text-gray-600 group cursor-default"
                >
                    <div className="text-green-500 bg-green-50 p-1.5 rounded-full group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default TrustIndicators;
