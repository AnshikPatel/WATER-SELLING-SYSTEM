import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Account() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);  // Added loading state for better UX
  const navigate = useNavigate();

  // Logout functionality
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');  // Remove token on logout
    navigate('/');  // Redirect to home page after logout
  };

  useEffect(() => {
    // Get user data from localStorage (or a mock database)
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      setLoading(false);  // Stop loading once data is fetched
    } else {
      // If no user found, redirect to login page
      navigate('/login');
    }
  }, [navigate]);

  if (loading) {
    return <p style={loadingStyle}>Please SignUp first</p>;  // Display loading message while data is being fetched
  }

  return (
    <div style={accountContainerStyle}>
      {user ? (
        <>
          <h2 style={headingStyle}>Welcome, {user.name}!</h2>
          <div style={userInfoContainerStyle}>
            <h3 style={subHeadingStyle}>Your Information:</h3>
            <p style={userInfoStyle}><strong>Email:</strong> {user.email}</p>
            <p style={userInfoStyle}><strong>Orders Made:</strong> {user.orders.length}</p>
          </div>

          <div style={orderHistoryContainerStyle}>
            <h3 style={subHeadingStyle}>Your Order History:</h3>
            {user.orders && user.orders.length > 0 ? (
              <ul style={orderListStyle}>
                {user.orders.map((order, index) => (
                  <li key={index} style={orderItemStyle}>
                    <strong>Order {index + 1}</strong><br />
                    <strong>Location:</strong> {order.location}, {order.city}<br />
                    <strong>Date:</strong> {order.date}<br />
                    <strong>Items:</strong>
                    <ul style={orderDetailsStyle}>
                      {order.cartItems.map((item, itemIndex) => (
                        <li key={itemIndex} style={orderItemDetailStyle}>
                          {item.title} - {item.size} (Quantity: {item.quantity})
                        </li>
                      ))}
                    </ul>
                    <hr style={separatorStyle} />
                  </li>
                ))}
              </ul>
            ) : (
              <p>No orders yet.</p>
            )}
          </div>
        </>
      ) : (
        <p>No user data available.</p>
      )}
      <button
  style={logoutButtonStyle}
  onMouseEnter={(e) => e.target.style.backgroundColor = logoutButtonHoverStyle.backgroundColor}
  onMouseLeave={(e) => e.target.style.backgroundColor = logoutButtonStyle.backgroundColor}
  onClick={handleLogout}
>
  Logout
</button>

    </div>
  );
}

export default Account;

// Styles

const accountContainerStyle = {
  padding: '20px',
  maxWidth: '900px',
  margin: '0 auto',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '2rem',
  color: '#333',
  marginBottom: '30px',
};

const subHeadingStyle = {
  fontSize: '1.5rem',
  color: '#333',
  marginBottom: '15px',
};

const userInfoContainerStyle = {
  backgroundColor: '#f9f9f9',
  padding: '20px',
  borderRadius: '8px',
  marginBottom: '30px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const userInfoStyle = {
  fontSize: '1.1rem',
  color: '#555',
  marginBottom: '10px',
};

const orderHistoryContainerStyle = {
  backgroundColor: '#f9f9f9',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const orderListStyle = {
  listStyleType: 'none',
  paddingLeft: '0',
};

const orderItemStyle = {
  marginBottom: '20px',
  borderBottom: '1px solid #ddd',
  paddingBottom: '20px',
};

const orderDetailsStyle = {
  listStyleType: 'none',
  paddingLeft: '0',
  marginTop: '10px',
};

const orderItemDetailStyle = {
  fontSize: '1rem',
  color: '#555',
};

const separatorStyle = {
  border: 'none',
  borderTop: '1px solid #ddd',
  marginTop: '15px',
};

const loadingStyle = {
  textAlign: 'center',
  fontSize: '1.5rem',
  color: '#00796b',
  marginTop: '50px',
};
const logoutButtonStyle = {
  backgroundColor: 'Teal',  // A red color for attention
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s, transform 0.3s',
  marginTop: '20px',
  display: 'block',
  width: '200px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const logoutButtonHoverStyle = {
  backgroundColor: 'Teal',  
  transform: 'scale(1.05)',
};