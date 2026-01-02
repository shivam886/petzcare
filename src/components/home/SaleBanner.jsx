import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Sparkles } from 'lucide-react';
import salePetsImage from '../../assets/images/new-year-dog.jpg';

const SaleBanner = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("NEWYEAR");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative w-full bg-[#e79f38] overflow-hidden py-4 md:py-8">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                {/* Simple confetti dots - Warm colors only */}
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full w-2 h-2 md:w-4 md:h-4"
                        style={{
                            backgroundColor: ['#FCA5A5', '#FCD34D', '#FDBA74', '#FFFFFF'][i % 4],
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
                {/* Left Content */}
                <div className="flex-1 text-center md:text-left py-6 md:py-10 text-white max-w-xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-2 drop-shadow-sm">
                            New Year Sale <span className="text-yellow-200">2026</span>
                        </h2>

                        <div className="relative inline-block my-6">
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="bg-[#4a2e15] text-white px-8 py-3 transform -skew-x-6 shadow-xl border-l-4 border-yellow-400"
                            >
                                <span className="block text-3xl md:text-5xl font-black skew-x-6 tracking-wide">
                                    FLAT 26% OFF
                                </span>
                            </motion.div>
                        </div>

                        <p className="text-xl md:text-2xl font-bold text-orange-100 mb-8 border-b-2 border-orange-300/30 inline-block pb-1">
                            December 30th - January 7th
                        </p>

                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 max-w-md mx-auto md:mx-0">
                            <p className="text-sm font-semibold text-orange-100 mb-2 uppercase tracking-wider flex items-center justify-center md:justify-start gap-2">
                                <Sparkles size={16} className="text-yellow-300" />
                                Upgrade Your Dog Bowl Now!
                            </p>
                            <div className="flex items-stretch bg-white rounded-lg overflow-hidden shadow-lg pl-4 pr-1 py-1">
                                <div className="flex-1 flex flex-col justify-center text-left">
                                    <span className="text-xs text-gray-500 font-bold uppercase">Coupon Code</span>
                                    <span className="text-xl md:text-2xl font-black text-gray-800 tracking-wider">NEWYEAR</span>
                                </div>
                                <button
                                    onClick={handleCopy}
                                    className={`px-6 rounded-md font-bold transition-all flex items-center gap-2 ${copied
                                        ? 'bg-green-500 text-white'
                                        : 'bg-gray-900 text-white hover:bg-gray-800'
                                        }`}
                                >
                                    {copied ? <Check size={20} /> : <Copy size={18} />}
                                    {copied ? 'Copied!' : 'Copy'}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Image */}
                <div className="flex-1 w-full max-w-lg md:max-w-xl md:translate-y-8 relative">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative z-10"
                    >
                        {/* Image container with rounded corners and soft shadow */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                            <img
                                src={salePetsImage}
                                alt="Happy dog and cat"
                                className="w-full h-auto object-cover"
                            />
                            {/* Gradient Overlay for better text contrast if needed, mostly style here */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </div>

                        {/* Brand Badge - Corrected */}
                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur rounded-full px-5 py-2 shadow-lg">
                            <span className="font-extrabold text-xl text-[#EA9852] tracking-tight">PetzKare</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SaleBanner;
