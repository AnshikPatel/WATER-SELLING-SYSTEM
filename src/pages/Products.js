import React, { useState } from 'react';

// Import images from the assets folder
import bottle1L from '../assets/bottle_1L.jpeg';
import bottle2L from '../assets/bottle2L.jpeg';
import bottle5L from '../assets/bottle5L.jpeg';
import tank from '../assets/tank.jpeg';
import pack from '../assets/pack.jpeg';
import bottle3L from '../assets/bottle3L.jpeg';

function Products({ addToCart }) {
  // Define products array with predefined bottle names, sizes, and images
  const products = [
    { id: 1, name: '1L Bottle', size: '1L', image: bottle1L, price: 20 },
    { id: 2, name: '2L Bottle', size: '2L', image: bottle2L, price: 30 },
    { id: 3, name: '5L Bottle', size: '5L', image: bottle5L, price: 50 },
    { id: 4, name: 'Water Tank', size: 'Tank', image: tank, price: 200 },
    { id: 5, name: 'Pack', size: 'Pack', image: pack, price: 100 },
    { id: 6, name: '500mL Bottle', size: '500mL', image: bottle3L, price: 25 },
  ];

  const [quantities, setQuantities] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleQuantityChange = (id, delta) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: Math.max(1, (prevQuantities[id] || 1) + delta)
    }));
  };

  const handleAddToCart = (product) => {
    addToCart(product, quantities[product.id] || 1);
    setShowPopup(true);  // Show the popup after adding to cart
  };

  return (
    <div style={productsContainerStyle}>
      <h2 style={headingStyle}>Our Products</h2>

      {/* Popup Message */}
      {showPopup && (
        <div style={popupStyle}>
          <p>Product added to cart successfully!</p>
          <button onClick={() => setShowPopup(false)} style={popupButtonStyle}>Close</button>
        </div>
      )}

      <div style={productGridStyle}>
        {products.map((product) => (
          <div key={product.id} style={productCardStyle}>
            <img
              src={product.image}
              alt={`${product.name} bottle`}
              style={productImageStyle}
            />
            <div style={productDetailsStyle}>
              <p style={productNameStyle}>{product.name}</p>
              <p style={productSizeStyle}>Size: {product.size}</p>
              <p style={productPriceStyle}>Price: ₹{product.price}</p>
              <div style={quantityContainerStyle}>
                <button onClick={() => handleQuantityChange(product.id, -1)} style={quantityButtonStyle}>-</button>
                <span style={quantityTextStyle}>{quantities[product.id] || 1}</span>
                <button onClick={() => handleQuantityChange(product.id, 1)} style={quantityButtonStyle}>+</button>
              </div>
              <button onClick={() => handleAddToCart(product)} style={addToCartButtonStyle}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

// Styles

const productsContainerStyle = {
  padding: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '2rem',
  marginBottom: '40px',
  color: '#333',
};

const productGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',  // Updated to display two products per row
  gap: '20px',
  marginTop: '20px',
};

const productCardStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const productCardHoverStyle = {
  transform: 'scale(1.05)',
  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)',
};

const productImageStyle = {
  width: '50%',
  height: '300px',
  objectFit: 'cover',
  borderRadius: '8px',
};

const productDetailsStyle = {
  marginTop: '15px',
};

const productNameStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const productSizeStyle = {
  fontSize: '1rem',
  color: '#777',
};

const productPriceStyle = {
  fontSize: '1.1rem',
  color: '#333',
  marginTop: '10px',
  marginBottom: '15px',
};

const quantityContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '10px',
};

const quantityButtonStyle = {
  backgroundColor: '#00796b',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  padding: '5px 10px',
  cursor: 'pointer',
  margin: '0 5px',
  fontSize: '1rem',
};

const quantityTextStyle = {
  fontSize: '1rem',
  fontWeight: 'bold',
  margin: '0 10px',
};

const addToCartButtonStyle = {
  backgroundColor: '#00796b',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  padding: '10px 20px',
  cursor: 'pointer',
  fontSize: '1.1rem',
  width: '100%',
  marginTop: '15px',
};

const popupStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '20px',
  backgroundColor: '#00796b',
  color: 'white',
  borderRadius: '8px',
  textAlign: 'center',
  zIndex: '1000',
};

const popupButtonStyle = {
  backgroundColor: 'transparent',
  color: 'white',
  border: '2px solid white',
  borderRadius: '4px',
  padding: '5px 10px',
  cursor: 'pointer',
  marginTop: '10px',
};
