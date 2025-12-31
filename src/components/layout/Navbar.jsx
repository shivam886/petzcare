import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import { ShoppingCart, Menu, X, Search, PawPrint } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/petzkare-logo.png';

const Navbar = () => {
    const { cartCount, openCart } = useShop();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50 py-3">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="PetzKare Logo" className="h-10 w-auto" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-dark hover:text-primary transition-colors font-medium">Home</Link>
                    <Link to="/shop" className="text-dark hover:text-primary transition-colors font-medium">Shop</Link>
                    <Link to="/about" className="text-dark hover:text-primary transition-colors font-medium">About</Link>
                    <Link to="/contact" className="text-dark hover:text-primary transition-colors font-medium">Contact</Link>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-4">
                    <Link to="/login" className="text-dark hover:text-primary hidden sm:block"><User size={24} /></Link>
                    <button className="text-dark hover:text-primary hidden sm:block"><Heart size={24} /></button>

                    <button
                        onClick={openCart}
                        className="relative bg-primary text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all flex items-center gap-2"
                    >
                        <ShoppingCart size={20} />
                        <span className="font-medium">Cart</span>
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-accent text-dark text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border border-white">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    <button className="md:hidden text-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-white border-t overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            <Link to="/" className="text-dark hover:text-primary" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link to="/shop" className="text-dark hover:text-primary" onClick={() => setIsMenuOpen(false)}>Shop</Link>
                            <Link to="/about" className="text-dark hover:text-primary" onClick={() => setIsMenuOpen(false)}>About</Link>
                            <Link to="/contact" className="text-dark hover:text-primary" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
