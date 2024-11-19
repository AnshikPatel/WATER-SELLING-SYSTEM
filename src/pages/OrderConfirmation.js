import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderConfirmation() {
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrder = localStorage.getItem('orderDetails');
    if (storedOrder) {
      setOrderDetails(JSON.parse(storedOrder));
    } else {
      navigate('/'); // Redirect to home if no order details are found
    }
  }, [navigate]);

  const handleHomePageRedirect = () => {
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {orderDetails ? (
        <>
          <h2>Order Confirmation</h2>
          <h3>Thank you for your order, {orderDetails.name}!</h3>
          <p>Your order details are as follows:</p>
          <ul>
            <li><strong>Name:</strong> {orderDetails.name}</li>
            <li><strong>Location:</strong> {orderDetails.location}</li>
            <li><strong>City:</strong> {orderDetails.city}</li>
            <li><strong>Cart Items:</strong></li>
            <ul>
              {orderDetails.cartItems.map((item, index) => (
                <li key={index}>
                  {item.title} - {item.size} (Quantity: {item.quantity})
                </li>
              ))}
            </ul>
          </ul>
          <p>Your order will be processed soon. You will be redirected to the home page shortly.</p>

          {/* Button to manually navigate to home page */}
          <button onClick={handleHomePageRedirect}>Go to Home Page</button>
        </>
      ) : (
        <p>Loading order details...</p>
      )}
    </div>
  );
}

export default OrderConfirmation;
