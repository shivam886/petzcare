import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import { ShoppingCart, Menu, X, Search, User, Heart, MapPin, Truck, Snowflake as SnowflakeIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/petzkare-logo.png';

const Snowflake = ({ delay }) => (
    <motion.div
        initial={{ y: -20, opacity: 0, rotate: 0 }}
        animate={{
            y: 100,
            opacity: [0, 1, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: 360
        }}
        transition={{ duration: 4, repeat: Infinity, delay: delay, ease: "linear" }}
        className="absolute pointer-events-none z-0 text-blue-200/60"
        style={{ left: `${Math.random() * 100}%` }}
    >
        <SnowflakeIcon size={14} fill="currentColor" />
    </motion.div>
);

const Navbar = () => {
    const { cartCount, openCart } = useShop();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeaderHovered, setIsHeaderHovered] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            navigate(`/shop?search=${e.target.value}`);
        }
    };

    return (
        <header className="flex flex-col w-full z-50">



            {/* Main Header Row */}
            <div
                className="bg-white py-4 shadow-sm border-b relative overflow-hidden transition-colors duration-500 hover:bg-gradient-to-b hover:from-white hover:to-blue-50/30"
                onMouseEnter={() => setIsHeaderHovered(true)}
                onMouseLeave={() => setIsHeaderHovered(false)}
            >
                <AnimatePresence>
                    {isHeaderHovered && (
                        <>
                            {[...Array(30)].map((_, i) => (
                                <Snowflake key={i} delay={Math.random() * 2} />
                            ))}
                        </>
                    )}
                </AnimatePresence>
                <div className="w-full px-4 md:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-8 relative z-10">
                    {/* Logo & Mobile Menu Toggle */}
                    <div className="flex w-full md:w-auto justify-between items-center">
                        <Link to="/">
                            <img src={logo} alt="PetzKare Logo" className="h-14 w-auto object-contain" />
                        </Link>
                        <div className="flex items-center gap-4 md:hidden">
                            <button onClick={openCart} className="relative text-dark">
                                <ShoppingCart size={24} />
                                {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>}
                            </button>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 flex justify-center px-4 md:px-8">
                        <div className="w-full max-w-2xl relative group">
                            <input
                                type="text"
                                placeholder="Search for products..."
                                className="w-full bg-neutral border border-gray-300 rounded-full py-2.5 pl-12 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                onKeyDown={handleSearch}
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary" size={20} />
                        </div>
                    </div>

                    {/* Action Items (Desktop) */}
                    <div className="hidden md:flex items-center gap-6 text-dark whitespace-nowrap">
                        <Link to="/track" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                            <Truck size={20} />
                            <span className="text-sm font-medium">Track Order</span>
                        </Link>


                        <Link to="/#wishlist" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                            <Heart size={20} />
                            <span className="text-sm font-medium">Wishlist</span>
                        </Link>

                        <button onClick={openCart} className="flex items-center gap-1.5 hover:text-primary transition-colors relative">
                            <div className="relative">
                                <ShoppingCart size={22} />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-[#008f4c] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                            <span className="text-sm font-medium">Cart</span>
                        </button>

                        <Link
                            to="/login"
                            className="bg-primary hover:bg-[#ff5500] text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 transition-all shadow-sm hover:shadow-md"
                        >
                            <User size={18} fill="currentColor" />
                            Login/Sign Up
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation (Desktop) */}
            <div className="hidden md:block bg-white shadow-sm border-b overflow-x-auto">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center gap-8 py-3">
                        {['Home', 'Shop', 'Puppy', 'Treats', 'Supplements', 'About', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                to={item === 'Home' ? '/' : (item === 'About' || item === 'Contact' ? `/${item.toLowerCase()}` : `/shop?cat=${item.toLowerCase()}`)}
                                className="text-sm font-bold text-gray-700 hover:text-primary uppercase tracking-wide transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="md:hidden bg-white border-b overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-2">
                            {['Home', 'Shop', 'Puppy', 'Treats', 'About', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className="py-3 px-4 hover:bg-neutral rounded-lg text-dark font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                            <div className="h-px bg-gray-100 my-2" />
                            <Link to="/login" className="py-3 px-4 text-primary font-bold" onClick={() => setIsMenuOpen(false)}>Login / Sign Up</Link>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
