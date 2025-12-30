import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-4 font-sans">PetzCare</h3>
                    <p className="text-gray-500 text-sm">Healthy Food. Happy Pets.<br />Premium nutrition for your furry friends.</p>
                </div>

                <div>
                    <h4 className="font-bold text-dark mb-4">Shop</h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li><a href="#" className="hover:text-primary transition-colors">Dog Food</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Cat Food</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Accessories</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-dark mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-dark mb-4">Newsletter</h4>
                    <div className="flex flex-col gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-sm"
                        />
                        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 border-t border-gray-100 mt-8 pt-8 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} PetzCare. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
