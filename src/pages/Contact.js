import React, { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !feedback) {
      alert('Please fill in all fields.');
      return;
    }

    // Display feedback or save to local storage, API, etc.
    console.log('Feedback submitted:', { name, email, feedback });

    // Display success message
    setSubmitSuccess(true);

    // Clear form fields
    setName('');
    setEmail('');
    setFeedback('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Contact Us</h2>
      <p>If you have any questions or need assistance, feel free to reach out to us:</p>
      <p><strong>Email:</strong> evehiclenaya@gmail.com</p>
      <p><strong>Phone:</strong> +91 9621002000</p>
      
      {/* Feedback Form */}
      <h3>Give Us Your Feedback</h3>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={inputStyle}
        />
        
        <label style={labelStyle}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={inputStyle}
        />
        
        <label style={labelStyle}>Feedback:</label>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback"
          style={textareaStyle}
        /><br />
        
        <button type="submit" style={buttonStyle}>Submit Feedback</button>
      </form>

      {/* Success Message */}
      {submitSuccess && (
        <p style={{ color: 'green', marginTop: '20px' }}>Thank you for your feedback! We appreciate your input.</p>
      )}
    </div>
  );
}

// Styles for the form
const formStyle = {
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  maxWidth: '400px',
  // margin: 'auto',
};

const labelStyle = {
  fontWeight: 'bold',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const textareaStyle = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  minHeight: '100px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default ContactUs;
