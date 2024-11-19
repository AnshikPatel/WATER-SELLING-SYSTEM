import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id="footer" style={footerStyle}>
      <div style={footerContentStyle}>
        <div style={contactInfoStyle}>
          <p style={footerTextStyle}>
            © 2024 Water Delivery. All rights reserved.
          </p>
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:support@waterdelivery.com" style={contactLinkStyle}>evehiclenaya@gmail.com</a></p>
          <p>Phone: +91 9621002000</p>
          <p>Website: <a href="https://www.waterdelivery.com" target="_blank" rel="noopener noreferrer" style={contactLinkStyle}>www.waterdelivery.com</a></p>
        </div>
        <div style={quickLinksStyle}>
          <h4>Quick Links</h4>
          <ul style={linkListStyle}>
            <li><Link to="/" style={footerLinkStyle}>Home</Link></li>
            <li><Link to="/products" style={footerLinkStyle}>Products</Link></li>
            <li><Link to="/order" style={footerLinkStyle}>Order</Link></li>
            <li><Link to="/contact" style={footerLinkStyle}>Feedback</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

// Styles
const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
  textAlign: 'center',
  fontSize: '14px',
  position: 'relative',
  bottom: '0',
  width: '100%',
};

const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  margin: 'auto',
  padding: '0 20px',
};

const contactInfoStyle = {
  flex: '1',  // Takes up 50% of the space
  marginRight: '20px',  // Space between the two sections
  textAlign: 'left',
};

const quickLinksStyle = {
  flex: '1',  // Takes up the other 50%
  textAlign: 'left',
};

const linkListStyle = {
  listStyleType: 'none',
  padding: '0',
};

const footerLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  display: 'block',
  padding: '5px 0',
};

const footerTextStyle = {
  margin: '5px 0',  // Reduced margin for compactness
};

const contactLinkStyle = {
  color: '#fff',
  textDecoration: 'none',  // Ensures the link isn't styled like a button
  padding: '0',  // No padding for normal link appearance
};

export default Footer;
