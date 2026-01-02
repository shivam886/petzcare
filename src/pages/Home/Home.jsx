import React from 'react';
import winterDogImage from '../../assets/images/winter-dog-scarf.jpg';
import { motion } from 'framer-motion';
import HeroImageScroller from '../../components/home/HeroImageScroller';
import FloatingTags from '../../components/home/FloatingTags';
import TrustIndicators from '../../components/home/TrustIndicators';
import PersonalizationHook from '../../components/home/PersonalizationHook';

import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';

import { useShop } from '../../context/ShopContext';
import Card from '../../components/common/Card';
import { formatCurrency } from '../../utils/formatCurrency';
import SaleBanner from '../../components/home/SaleBanner';

const Home = () => {
    const { products } = useShop();
    const navigate = useNavigate();
    const featuredProducts = products.slice(0, 4);

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-secondary/50 pt-20 pb-32 relative overflow-hidden">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="z-10">
                        <FloatingTags />

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-5xl md:text-7xl font-bold text-dark mb-6 leading-tight"
                        >
                            <span className="block">Real Nutrition.</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                                Real Love.
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, staggerChildren: 0.2 }}
                            className="text-lg text-gray-600 mb-8 max-w-lg space-y-2"
                        >
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center gap-2"
                            >
                                ✨ Thoughtfully crafted pet food
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 }}
                                className="flex items-center gap-2"
                            >
                                🌿 Made with science, care, and clean ingredients
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9 }}
                                className="flex items-center gap-2"
                            >
                                ❤️ Designed for everyday health & happiness
                            </motion.p>
                        </motion.div>

                        <TrustIndicators />

                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/shop')}
                                className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
                            >
                                Find the Right Food ➝
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#F3F4F6" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/about')}
                                className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:border-gray-300 transition-all"
                            >
                                Why PetzCare?
                            </motion.button>
                        </div>

                        <PersonalizationHook />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <HeroImageScroller />
                    </motion.div>
                </div>
            </section>

            <SaleBanner />

            {/* Quick Shop Categories */}
            <section className="py-12 container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-dark mb-4">Shop by Category</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Explore our wide range of premium products for your furry friends.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[
                        { name: 'Dog Food', icon: '🐕', bg: 'bg-[#FFF4E6]', link: '/shop?category=dog' },
                        { name: 'Cat Food', icon: '🐈', bg: 'bg-[#E6F4FF]', link: '/shop?category=cat' },
                        { name: 'Dog Treats', icon: '🦴', bg: 'bg-[#FFF0F0]', link: '/shop?search=treats' },
                        { name: 'Walk Gear', icon: '🦮', bg: 'bg-[#F0FFF4]', link: '/shop?search=walk' },
                        { name: 'Cat Furniture', icon: '🏰', bg: 'bg-[#F3E6FF]', link: '/shop?search=furniture' },
                        { name: 'Dog Toys', icon: '🎾', bg: 'bg-[#E6FFFA]', link: '/shop?search=toy' }
                    ].map((cat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className={`${cat.bg} rounded-2xl p-6 text-center cursor-pointer transition-shadow hover:shadow-lg`}
                            onClick={() => navigate(cat.link)}
                        >
                            <div className="text-4xl mb-3">{cat.icon}</div>
                            <h3 className="font-bold text-gray-800 text-sm">{cat.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Winter Essentials Banner */}
            {/* Winter Essentials Banner */}
            {/* Winter Essentials Banner - Redesigned */}
            <section className="py-16 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden rounded-[2.5rem] bg-[#fab943] shadow-2xl min-h-[450px] flex items-center md:items-end justify-between group"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                    <div className="absolute bottom-0 right-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none"></div>

                    <div className="container mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center relative z-10 h-full">
                        {/* Text Content */}
                        <div className="w-full md:w-1/2 text-center md:text-left py-12 md:py-16">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/90 backdrop-blur-sm border border-white/40 text-[#5D3A1A] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                                    ❄️ Season Special
                                </span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-4xl md:text-6xl font-black text-[#4A2E15] mb-6 leading-[1.1]"
                            >
                                <span className="text-[#FF6D1F]">For the Coldest</span> <br />
                                <span className="text-white drop-shadow-md">Winter Days.</span>
                            </motion.h2>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/shop?search=winter')}
                                className="bg-[#FF6D1F] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-[#E25822] transition-all flex items-center gap-3 mx-auto md:mx-0"
                            >
                                Shop Winter Collection
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </motion.button>
                        </div>

                        {/* Image */}
                        <div className="w-full md:w-1/2 h-full flex justify-center md:justify-end items-end md:absolute md:right-0 md:bottom-0 pointer-events-none">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                src={winterDogImage}
                                alt="Happy dog wearing a scarf"
                                className="w-[85%] md:w-[650px] object-contain drop-shadow-2xl relative translate-y-4 md:translate-y-8"
                            />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Winter Product Grid */}
            <section className="py-12 container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.filter(p => p.tags.includes('Winter')).slice(0, 4).map((product, index) => (
                        <Card key={product.id} className="group bg-white/60 backdrop-blur-md hover:bg-white hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                            >
                                <div className="relative aspect-square overflow-hidden rounded-2xl m-3 bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                                        ❄️ Winter Special
                                    </span>
                                </div>
                                <div className="px-5 pb-5 pt-2">
                                    <p className="text-xs text-blue-400 font-bold tracking-wide uppercase mb-1">{product.category}</p>
                                    <h3 className="font-bold text-dark text-lg mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                                    <div className="flex justify-between items-center">
                                        <p className="text-gray-900 font-extrabold text-xl">{formatCurrency(product.price)}</p>
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-3xl font-bold">Featured Products</h2>
                        <Link to="/shop" className="text-primary font-bold hover:underline">View All</Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.length > 0 ? featuredProducts.map(product => (
                            <Card key={product.id} className="group">
                                <div className="relative aspect-square overflow-hidden bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/e2e8f0/1e293b?text=No+Image'; }}
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {product.tags.includes('Best Seller') && (
                                        <span className="absolute top-2 left-2 bg-accent text-dark text-xs font-bold px-3 py-1 rounded-full">
                                            Best Seller
                                        </span>
                                    )}
                                    <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-md text-primary hover:bg-primary hover:text-white transition-colors translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-300">
                                        +
                                    </button>
                                </div>
                                <div className="p-4">
                                    <p className="text-xs text-gray-500 mb-1 capitalize">{product.category}</p>
                                    <h3 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                                    <div className="flex justify-between items-center">
                                        <span className="text-primary font-bold">{formatCurrency(product.price)}</span>
                                        <div className="flex text-yellow-400 text-sm">
                                            {'★'.repeat(Math.round(product.rating))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        )) : (
                            <div className="col-span-4 text-center py-10">Loading products...</div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
