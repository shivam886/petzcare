import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import { useShop } from '../../context/ShopContext';
import Card from '../../components/common/Card';
import { formatCurrency } from '../../utils/formatCurrency';

const Home = () => {
    const { products } = useShop();
    const navigate = useNavigate();
    const featuredProducts = products.slice(0, 4);

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-secondary/50 pt-20 pb-32 relative overflow-hidden">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="bg-white text-primary px-4 py-1 rounded-full text-sm font-bold shadow-sm mb-4 inline-block">
                            Premium Pet Nutrition
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6 leading-tight">
                            Healthy Food.<br /> <span className="text-primary">Happy Pets.</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg">
                            Give your furry friends the nutrition they deserve with our premium, organic, and scientifically balanced pet food.
                        </p>
                        <div className="flex gap-4">
                            <Button onClick={() => navigate('/shop')}>Shop Now</Button>
                            <Button variant="outline" onClick={() => navigate('/about')}>Learn More</Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Placeholder for hero image */}
                        <div className="bg-primary/20 rounded-full w-[400px] h-[400px] absolute -z-10 blur-3xl right-0 top-0"></div>
                        <img
                            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Happy Dog"
                            className="rounded-3xl shadow-2xl relative z-10 w-full max-w-md mx-auto"
                        />
                    </motion.div>
                </div>
            </section>

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
            <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                        <div className="max-w-xl">
                            <span className="text-blue-500 font-bold tracking-wider text-sm uppercase mb-2 block">Season Special</span>
                            <h2 className="text-4xl font-bold text-dark mb-4">For The Coldest Winter Yet...</h2>
                            <p className="text-gray-600 text-lg mb-6">We have you covered (and cuddled) all season! Shop our exclusive range of winter wear and cozy bedding.</p>
                            <Button onClick={() => navigate('/shop?search=winter')}>Shop Winter Collection</Button>
                        </div>
                        <div className="hidden md:flex gap-4">
                            {/* Decorative circles or mini-gallery could go here, for now just spacing */}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.filter(p => p.tags.includes('Winter')).slice(0, 4).map(product => (
                            <Card key={product.id} className="group bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-white/50">
                                <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                        Winter Special
                                    </span>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-dark mb-1 text-sm line-clamp-1">{product.name}</h3>
                                    <div className="flex justify-between items-center mt-2">
                                        <p className="text-blue-600 font-bold text-lg">{formatCurrency(product.price)}</p>
                                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                            →
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
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
