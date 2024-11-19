import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Order from './pages/Order';
import Account from './pages/Account';
import Contact from './pages/Contact';
import OrderConfirmation from './pages/OrderConfirmation';
import Login from './pages/Account';
import SignUp from './pages/Signup';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const isAuthenticated = false; // Mocked authentication state
  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const productIndex = cartItems.findIndex(item => item.id === product.id);
    if (productIndex === -1) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    } else {
      const updatedCart = [...cartItems];
      updatedCart[productIndex].quantity += 1;
      setCartItems(updatedCart);
    }

  };
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/order" element={<Order cartItems={cartItems} />} />
          <Route path="/account" element={isAuthenticated ? <Account /> : <Navigate to="/login" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
