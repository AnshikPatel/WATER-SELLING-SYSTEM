import React, { useState, useRef } from 'react';
import images from '../assets/images.jpeg'; // Import the image
import bottle1L from '../assets/bottle_1L.jpeg';
import bottle2L from '../assets/bottle2L.jpeg';
import bottle5L from '../assets/bottle5L.jpeg';
import tank from '../assets/tank.jpeg';
import pack from '../assets/pack.jpeg';
import bottle3L from '../assets/bottle3L.jpeg';

function Home() {
  // Create a ref for the Features Section
  const featuresSectionRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const handleExploreClick = () => {
    // Scroll to the features section smoothly
    featuresSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={containerStyle}>
      {/* Hero Section with Background Image */}
      <div style={{ ...heroSectionStyle, backgroundImage: `url(${images})` }}>
        <div>
          <h2 style={heroParagraphStyle}><b>
            Your one-stop solution for clean, fresh water for every occasion.<br />
            We provide safe drinking water, available in bottles and tanks, for homes, offices, and large events.<br />
            With our quick delivery and reliable service, we ensure you never run out of water.<br />
            Whether you’re hosting a wedding, a corporate event, or simply need water for daily use, we've got you covered.<br />
            Explore our wide range of products designed to meet your water needs with ease and convenience.
          </b></h2>
          <button
            style={{ ...ctaButtonStyle, backgroundColor: isHovered ? '#00796b' : '#004d40' }}
            onClick={handleExploreClick}
            onMouseEnter={() => setIsHovered(true)}  // Set hover state to true
            onMouseLeave={() => setIsHovered(false)}  // Set hover state to false
          >
            Explore Now
          </button>
        </div>
      </div>

      {/* Features Section (will be scrolled to) */}
      <div ref={featuresSectionRef}>
        <h3 style={featureHeadingStyle}>Why Choose Us?</h3>
        <div style={featureBoxStyle}>
          <h4>High-Quality Water</h4>
          <p>We provide fresh and clean water available in bottles and tanks for any need.</p>
        </div>
        <div style={featureBoxStyle}>
          <h4>Fast Delivery</h4>
          <p>Quick and reliable water delivery for homes, events, and businesses.</p>
        </div>
        <div style={featureBoxStyle}>
          <h4>Affordable Prices</h4>
          <p>Get budget-friendly water solutions tailored to your requirements.</p>
        </div>
        <div style={featureBoxStyle}>
          <h4>Variety of Products</h4>
          <p>We offer various options from bottled water to large water tanks for events and businesses.</p>
          <a href="/products" style={linkStyle}>Explore Products</a>
        </div>
        <div style={featureBoxStyle}>
          <h4>Reliable Support</h4>
          <p>Our customer service is available to assist with any water delivery inquiries or orders.</p>
        </div>
      </div>

      {/* Product Categories Section */}
      <section style={productCategoriesSectionStyle}>
        <h3 style={sectionTitleStyle}>Our Product Categories</h3>
        <div style={productGridStyle}>
          
          <div style={productCardStyle}>
            <img src={tank} alt="Water Tank" style={productImageStyle} />
            <p style={productTextStyle}>Water Tanks</p>
            <a href="/products?category=tanks" style={linkStyle}>Explore Tanks</a>
          </div>
          <div style={productCardStyle}>
            <img src={bottle5L} alt="5L Water Bottle" style={productImageStyle} />
            <p style={productTextStyle}>5L Water Bottle</p>
            <a href="/products?category=bottles" style={linkStyle}>Explore Bottles</a>
          </div>
          <div style={productCardStyle}>
            <img src={pack} alt="Water Pack" style={productImageStyle} />
            <p style={productTextStyle}>Water Pack</p>
            <a href="/products?category=pack" style={linkStyle}>Explore Pack</a>
          </div>
        </div>
        <div style={productGridStyle}>
          <div style={productCardStyle}>
            <img src={bottle2L} alt="2L Water Bottle" style={productImageStyle} />
            <p style={productTextStyle}>2L Water Bottle</p>
            <a href="/products?category=bottles" style={linkStyle}>Explore Bottles</a>
          </div>
          <div style={productCardStyle}>
            <img src={bottle1L} alt="1L Water Bottle" style={productImageStyle} />
            <p style={productTextStyle}>1L Water Bottle</p>
            <a href="/products?category=bottles" style={linkStyle}>Explore Bottles</a>
          </div>
          <div style={productCardStyle}>
            <img src={bottle3L} alt="3L Water Bottle" style={productImageStyle} />
            <p style={productTextStyle}>500L Water Bottle</p>
            <a href="/products?category=bottles" style={linkStyle}>Explore Bottles</a>
          </div>
        </div>
      </section><br></br>

      {/* Order Section */}
      <section style={ctaSectionStyle}>
        <h3 style={ctaTitleStyle}>Need Fresh Water Delivered?</h3>
        <p style={ctaDescriptionStyle}>Order water bottles or tanks for your home, office, or event.</p>
        <a href="/order" style={ctaButtonStyle}>Order Now</a> {/* Added link to order page */}
      </section>

      {/* Customer Testimonials and Get in Touch Section */}
      <section style={testimonialsSectionStyle}>
        <div style={testimonialsLeftStyle}>
          <h3 style={sectionTitleStyle}>What Our Customers Say</h3>
          <div style={testimonialCardStyle}>
            <p>"The delivery was quick and the water quality is excellent!"</p>
            <span>-Arjun Das</span>
          </div>
          <div style={testimonialCardStyle}>
            <p>"Great service and prompt delivery! Highly satisfied with the experience. Will definitely recommend ."</p>
            <span>- Priya Sharma</span>
          </div>
        </div>
        <div style={testimonialsRightStyle}>
          <h3 style={sectionTitleStyle}>Get In Touch</h3>
          <div style={testimonialCardStyle}>
            <p>If you have any questions, feel free to contact us! We are always here to assist you with your water delivery needs. Our team is ready to provide you with the best service and ensure your satisfaction.</p>
            <p>We also welcome your feedback to help us improve our services and better meet your needs.</p><br></br>
            <a href="/contact" style={ctaButtonStyle}>Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

// Styles (unchanged)


// Styles

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: '#e0f7fa', // Light blue background
  textAlign: 'center',
  padding: '20px',
};

const heroSectionStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#00796b',
  padding: '0px 20px', // Increased padding for more space
  width: '100%',
  marginBottom: '40px', // Space below the hero section
  height: '80vh', // Adjust the height to cover a good portion of the screen
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};



const heroParagraphStyle = {
  fontSize: '1.7rem',
  marginBottom: '20px',
};

const ctaButtonStyle = {
  padding: '10px 20px',
  fontSize: '1.2rem',
  backgroundColor: '#004d40',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const featureHeadingStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
  color: '#00796b',
};

const featureBoxStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  margin: '10px 0',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const linkStyle = {
  color: '#00796b',
  textDecoration: 'underline',
};

const productCategoriesSectionStyle = {
  marginTop: '40px',
};


const productGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '30px',
  paddingLeft: '200px',
  marginBottom: '20px',
};

const productCardStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const productImageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  width: '200px', // Set a fixed width for all images
  height: '200px',
};

const productTextStyle = {
  marginTop: '10px',
  fontSize: '1.1rem',
};

const testimonialsSectionStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '40px',
};

const testimonialsLeftStyle = {
  width: '48%',
};

const testimonialsRightStyle = {
  width: '48%',
  // backgroundColor: '#00796b',
  // color: '#fff',
  // padding: '20px',
  borderRadius: '8px',
  // textAlign: 'center',
};

const testimonialCardStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  margin: '10px 0',
  textAlign: 'center',
};

const ctaSectionStyle = {
  padding: '40px 20px',
  backgroundColor: '#00796b',
  color: '#fff',
  textAlign: 'center',
  borderRadius: '8px',
};

const ctaTitleStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
};

const ctaDescriptionStyle = {
  fontSize: '1.2rem',
  marginBottom: '20px',
};

const sectionTitleStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
};
