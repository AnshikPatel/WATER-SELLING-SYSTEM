import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Store the user's data in localStorage (or a mock database)
    const newUser = { name, email, password, orders };
    localStorage.setItem('user', JSON.stringify(newUser));

    alert('Signup successful!');
    navigate('/login');  // Redirect to login page after signup
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Sign Up</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>Sign Up</button>
      </form>
    </div>
  );
}

// Styling
const containerStyle = {
  display: 'flex',
  // justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  // minHeight: '100vh',
  backgroundColor: '#f4f4f9',
  // padding: '20px',
  marginTop: '10px',
  marginBottom: '50px',
};

const headingStyle = {
  textAlign: 'center',
  color: '#333',
  marginBottom: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '300px',
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  fontSize: '14px',
  color: '#555',
  marginBottom: '5px',
};

const inputStyle = {
  padding: '10px',
  fontSize: '14px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  outline: 'none',
  marginBottom: '10px',
};

const buttonStyle = {
  padding: '12px',
  fontSize: '16px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

export default SignUp;
