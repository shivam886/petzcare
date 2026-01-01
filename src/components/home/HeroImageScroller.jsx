import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images directly to ensure bundler handles them
import hero1 from '../../assets/hero/hero-1.jpg';
import hero2 from '../../assets/hero/hero-2.jpg';
import hero3 from '../../assets/hero/hero-3.jpg';

const images = [hero1, hero2, hero3];

const HeroImageScroller = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return; // Pause on hover

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(timer);
    }, [isHovered]);

    return (
        <div
            className="relative w-full max-w-lg mx-auto aspect-square group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Blob */}
            <div className="bg-primary/20 rounded-full w-full h-full absolute -z-10 blur-3xl right-0 top-0 transform scale-110"></div>

            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`PetzCare Hero ${currentIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                </AnimatePresence>

                {/* Interactive Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === idx
                                    ? 'bg-white w-8'
                                    : 'bg-white/50 hover:bg-white/80'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroImageScroller;
