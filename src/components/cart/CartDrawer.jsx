import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { formatCurrency } from '../../utils/formatCurrency';
import Button from '../common/Button';

const CartDrawer = ({ isOpen, onClose }) => {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useShop();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black z-50"
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
                    >
                        <div className="p-4 border-b flex justify-between items-center bg-gray-50">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <ShoppingBag className="text-primary" /> Your Cart
                            </h2>
                            <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-gray-400 opacity-60">
                                    <ShoppingBag size={64} className="mb-4" />
                                    <p className="text-lg">Your cart is empty.</p>
                                    <Button variant="ghost" className="mt-4" onClick={onClose}>Continue Shopping</Button>
                                </div>
                            ) : (
                                cart.map(item => (
                                    <motion.div
                                        layout
                                        key={item.id}
                                        className="flex gap-4 border-b pb-4 last:border-0"
                                    >
                                        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/e2e8f0/1e293b?text=No+Image'; }}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <h3 className="font-bold text-sm text-dark line-clamp-2">{item.name}</h3>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                            <p className="text-xs text-gray-500 mb-2">{item.brand}</p>
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center border rounded-lg">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 hover:bg-gray-100 disabled:opacity-50"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="px-2 text-sm font-medium w-8 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 hover:bg-gray-100"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                                <p className="font-bold text-primary">{formatCurrency(item.price * item.quantity)}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="p-4 border-t bg-gray-50">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="text-xl font-bold text-dark">{formatCurrency(cartTotal)}</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Button className="w-full py-3 text-lg shadow-lg">Checkout</Button>
                                    <button
                                        onClick={clearCart}
                                        className="text-xs text-center text-gray-500 hover:text-red-500 underline"
                                    >
                                        Clear Cart
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
