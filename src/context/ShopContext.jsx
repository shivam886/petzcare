import React, { createContext, useContext, useState, useEffect } from 'react';
import productsData from '../data/products.json';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const saved = localStorage.getItem('petzcare_cart');
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load cart to local storage
    useEffect(() => {
        localStorage.setItem('petzcare_cart', JSON.stringify(cart));
    }, [cart]);

    // Load mock products
    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setProducts(productsData);
            setLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    const addToCart = (product, quantity = 1) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            return [...prev, { ...product, quantity }];
        });
    };

    const removeFromCart = (productId) => {
        setCart(prev => prev.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) return;
        setCart(prev => prev.map(item =>
            item.id === productId ? { ...item, quantity } : item
        ));
    };

    const clearCart = () => setCart([]);

    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    const [isCartOpen, setIsCartOpen] = useState(false);
    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    const value = {
        products,
        loading,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        openCart,
        closeCart
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
