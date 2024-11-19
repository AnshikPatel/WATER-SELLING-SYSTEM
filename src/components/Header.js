import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const scrollToFooter = (e) => {
    e.preventDefault(); // Prevent default navigation behavior
    const footerElement = document.getElementById('footer');
    footerElement.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}> AARNA NEER</h1>
      <nav>
        <ul style={navListStyle}>
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/products" style={linkStyle}>Products</Link></li>
          <li><Link to="/order" style={linkStyle}>Order</Link></li>
          <li><Link to="/account" style={linkStyle}>Account</Link></li>
          {/* Contact link that scrolls to the footer */}
          <li>
            <Link to="#footer" onClick={scrollToFooter} style={linkStyle}>
              Contact
            </Link>
          </li>
          <li><Link to="/signup" style={linkStyle}>SignUp</Link></li>
          {/* <li><Link to="/login" style={linkStyle}>Login</Link></li> */}

        </ul>
      </nav>
    </header>
  );
}

// Styles
const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#5F9EA0	',
  color: '#fff',
  padding: '20px 0', // Increased padding for more spacing
};

const titleStyle = {
  margin: '0',
  fontSize: '62px', // Increased font size
  fontWeight: 'bold', // Added bold for emphasis
  marginBottom: '20px', // Added spacing below the title
};

const navListStyle = {
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  padding: '0',
  margin: '10px 0',
  gap: '15px', // Increased gap between buttons
};

const linkStyle = {
  padding: '10px 20px',
  backgroundColor: '#00A36C',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  textAlign: 'center',
  border: 'none',
  fontSize: '18px', // Increased font size for better readability
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default Header;
