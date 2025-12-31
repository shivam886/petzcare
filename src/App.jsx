import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { ShopProvider, useShop } from './context/ShopContext';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import CartDrawer from './components/cart/CartDrawer';

const AppContent = () => {
  const { isCartOpen, closeCart } = useShop();

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<div className="container mx-auto px-4 py-12">About Us</div>} />
          <Route path="/contact" element={<div className="container mx-auto px-4 py-12">Contact Us</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Layout>
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
    </>
  );
};

function App() {
  return (
    <ShopProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <AppContent />
      </Router>
    </ShopProvider>
  );
}

export default App;
