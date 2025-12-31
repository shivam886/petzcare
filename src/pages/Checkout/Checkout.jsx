import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useShop();
    const [isSuccess, setIsSuccess] = useState(false);

    const handlePayment = (e) => {
        e.preventDefault();
        // Simulate payment processing
        setTimeout(() => {
            setIsSuccess(true);
            clearCart();
        }, 1500);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-neutral flex items-center justify-center p-4">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full"
                >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                        <CheckCircle size={48} />
                    </div>
                    <h2 className="text-2xl font-bold text-dark mb-4">Order Confirmed!</h2>
                    <p className="text-gray-600 mb-8">Thank you for your purchase. We've sent a confirmation email to your inbox.</p>
                    <Link to="/shop">
                        <Button className="w-full">Continue Shopping</Button>
                    </Link>
                </motion.div>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-neutral pt-24 pb-12 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-3xl font-bold mb-6">Checkout</h1>
                    <div className="bg-white rounded-2xl p-12 shadow-sm">
                        <p className="text-xl text-gray-500 mb-8">Your cart is empty.</p>
                        <Link to="/shop">
                            <Button>Browse Products</Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral pt-8 pb-12 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-8">
                    <Link to="/shop" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors">
                        <ArrowLeft size={18} className="mr-2" /> Back to Shop
                    </Link>
                </div>

                <h1 className="text-3xl font-bold text-dark mb-8 font-sans">Checkout</h1>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column: Forms */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Shipping Info */}
                        <section className="bg-white p-6 rounded-2xl shadow-sm">
                            <h2 className="text-xl font-bold mb-6 flex items-center">
                                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                                Shipping Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">First Name</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="Doe" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Address</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="123 Pet Street" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">City</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="Mumbai" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Postal Code</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="400001" />
                                </div>
                            </div>
                        </section>

                        {/* Payment Info */}
                        <section className="bg-white p-6 rounded-2xl shadow-sm">
                            <h2 className="text-xl font-bold mb-6 flex items-center">
                                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                                Payment Method
                            </h2>
                            <div className="space-y-4">
                                <div className="border rounded-xl p-4 flex items-center gap-4 cursor-pointer border-primary bg-secondary/20">
                                    <div className="w-4 h-4 rounded-full border-4 border-primary"></div>
                                    <span className="font-medium">Credit / Debit Card</span>
                                </div>
                                <div className="border rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:border-gray-300">
                                    <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                                    <span className="font-medium">UPI / Net Banking</span>
                                </div>
                                <div className="border rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:border-gray-300">
                                    <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                                    <span className="font-medium">Cash on Delivery</span>
                                </div>

                                <div className="mt-6 pt-6 border-t">
                                    <div className="space-y-4">
                                        <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="Card Number" />
                                        <div className="grid grid-cols-2 gap-4">
                                            <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="MM/YY" />
                                            <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="CVC" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-24">
                            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                            <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                {cart.map(item => (
                                    <div key={item.id} className="flex gap-4">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover bg-gray-50" />
                                        <div className="flex-1">
                                            <h4 className="text-sm font-medium line-clamp-2">{item.name}</h4>
                                            <div className="flex justify-between text-sm text-gray-500 mt-1">
                                                <span>Qty: {item.quantity}</span>
                                                <span>{formatCurrency(item.price * item.quantity)}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t pt-4 space-y-2">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>{formatCurrency(cartTotal)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="text-green-600">Free</span>
                                </div>
                                <div className="flex justify-between text-xl font-bold text-dark pt-4 border-t mt-4">
                                    <span>Total</span>
                                    <span>{formatCurrency(cartTotal)}</span>
                                </div>
                            </div>

                            <Button onClick={handlePayment} className="w-full mt-8 py-4 text-lg shadow-lg shadow-primary/30">
                                Pay Now {formatCurrency(cartTotal)}
                            </Button>

                            <p className="text-xs text-center text-gray-400 mt-4">
                                Secure Encypted Payment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
