import React, { useState, useMemo } from 'react';
import { useShop } from '../../context/ShopContext';
import Card from '../../components/common/Card';
import { formatCurrency } from '../../utils/formatCurrency';
import { Search, Filter, ArrowUpDown } from 'lucide-react';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { motion, AnimatePresence } from 'framer-motion';

const Shop = () => {
    const { products, addToCart, openCart } = useShop();

    // State
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState([0, 5000]);
    const [sortBy, setSortBy] = useState('popular');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Derived Data
    const categories = ['All', ...new Set(products.map(p => p.category))];
    const maxPrice = Math.max(...products.map(p => p.price), 5000);

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
            return matchesSearch && matchesCategory && matchesPrice;
        }).sort((a, b) => {
            if (sortBy === 'price-low') return a.price - b.price;
            if (sortBy === 'price-high') return b.price - a.price;
            if (sortBy === 'rating') return b.rating - a.rating;
            return b.reviews - a.reviews; // Default: Popularity
        });
    }, [products, search, selectedCategory, priceRange, sortBy]);

    const handleAddToCart = (product) => {
        addToCart(product);
        openCart();
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Mobile Filter Toggle */}
            <div className="md:hidden mb-4 flex gap-2">
                <Button variant="outline" className="flex-1" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                    <Filter size={16} /> Filters
                </Button>
                <div className="relative flex-1">
                    <select
                        className="w-full p-2 border rounded-lg appearance-none bg-white"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="popular">Popular</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Top Rated</option>
                    </select>
                    <ArrowUpDown size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Filters */}
                <aside className={`md:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <Filter size={20} /> Filters
                        </h3>

                        <div className="mb-6">
                            <label className="text-sm font-medium mb-2 block">Search</label>
                            <div className="relative">
                                <Input
                                    placeholder="Search products..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="pl-10"
                                />
                                <Search size={18} className="absolute left-3 top-3 text-gray-400" />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="text-sm font-medium mb-2 block">Category</label>
                            <div className="space-y-2">
                                {categories.map(cat => (
                                    <label key={cat} className="flex items-center gap-2 cursor-pointer hover:text-primary">
                                        <input
                                            type="radio"
                                            name="category"
                                            checked={selectedCategory === cat}
                                            onChange={() => setSelectedCategory(cat)}
                                            className="text-primary focus:ring-primary"
                                        />
                                        <span className="capitalize">{cat}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="text-sm font-medium mb-2 block">
                                Price Range: ₹0 - {formatCurrency(priceRange[1])}
                            </label>
                            <input
                                type="range"
                                min="0"
                                max={maxPrice}
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                className="w-full accent-primary"
                            />
                        </div>

                        <Button variant="ghost" className="w-full text-red-500 hover:bg-red-50" onClick={() => {
                            setSelectedCategory('All');
                            setPriceRange([0, maxPrice]);
                            setSearch('');
                        }}>
                            Reset Filters
                        </Button>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="hidden md:flex justify-between items-center mb-6">
                        <p className="text-gray-500">Showing {filteredProducts.length} results</p>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">Sort by:</span>
                            <select
                                className="border-none bg-transparent font-medium cursor-pointer focus:ring-0 hover:text-primary"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="popular">Popularity</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Top Rated</option>
                            </select>
                        </div>
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-20 bg-gray-50 rounded-2xl">
                            <p className="text-xl text-gray-500 mb-4">No products found.</p>
                            <Button onClick={() => {
                                setSelectedCategory('All');
                                setPriceRange([0, maxPrice]);
                                setSearch('');
                            }}>Clear Filters</Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <AnimatePresence>
                                {filteredProducts.map(product => (
                                    <Card key={product.id} layout className="flex flex-col h-full group">
                                        <div className="relative aspect-square overflow-hidden bg-gray-100">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/e2e8f0/1e293b?text=No+Image'; }}
                                                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                            />
                                            {product.tags.length > 0 && (
                                                <span className="absolute top-2 left-2 bg-accent text-dark text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                                    {product.tags[0]}
                                                </span>
                                            )}
                                        </div>

                                        <div className="p-4 flex flex-col flex-grow">
                                            <div className="flex justify-between items-start mb-2">
                                                <p className="text-xs text-gray-500 capitalize">{product.brand}</p>
                                                <div className="flex text-yellow-400 text-xs">
                                                    {'★'.repeat(Math.round(product.rating))}
                                                </div>
                                            </div>

                                            <h3 className="font-bold text-dark mb-2 line-clamp-2 flex-grow group-hover:text-primary transition-colors">
                                                {product.name}
                                            </h3>

                                            <div className="mt-4 flex items-center justify-between gap-4">
                                                <p className="text-lg font-bold text-primary">{formatCurrency(product.price)}</p>
                                                <Button
                                                    onClick={() => handleAddToCart(product)}
                                                    className="py-1 px-4 text-sm"
                                                >
                                                    Add
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Shop;
