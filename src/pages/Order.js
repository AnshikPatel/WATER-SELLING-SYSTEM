import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const availableStates = ['Delhi', 'Haryana', 'Punjab', 'Uttar Pradesh'];
const availableCities = {
  Delhi: ['New Delhi', 'Dwarka', 'Rohini'],
  Haryana: ['Gurugram', 'Faridabad', 'Panipat'],
  Punjab: ['Amritsar', 'Ludhiana', 'Jalandhar'],
  'Uttar Pradesh': ['Noida', 'Ghaziabad', 'Lucknow'],
};

function Order({ cartItems = [] }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [searchCity, setSearchCity] = useState('');
  const [state, setState] = useState('');
  const [cityAvailable, setCityAvailable] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleCitySearch = (e) => {
    e.preventDefault();
    const cities = availableCities[state];
    if (cities && cities.includes(searchCity)) {
      setCityAvailable(true);
      setCity(searchCity);
      alert(`${searchCity} is available for delivery!`);
    } else {
      setCityAvailable(false);
      alert(`${searchCity} is not available right now.`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !location || !city || !date) {
      alert('Please fill in all fields.');
      return;
    }

    const orderDetails = {
      name,
      location,
      city,
      date,
      cartItems,
    };

    let user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      alert('You need to sign in first!');
      return;
    }

    const updatedOrders = user.orders ? [...user.orders, orderDetails] : [orderDetails];
    user.orders = updatedOrders;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

    setOrderConfirmed(true);

    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', fontFamily: 'Arial, sans-serif', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
      <h2>Order Page</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <p><strong>Select State:</strong></p>
        <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
          {availableStates.map((stateName) => (
            <button
              key={stateName}
              type="button"
              onClick={() => setState(stateName)}
              style={{
                padding: '10px',
                backgroundColor: state === stateName ? '#4CAF50' : '#f0f0f0',
                color: state === stateName ? '#fff' : '#000',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              {stateName}
            </button>
          ))}
        </div>

        <label>
          Search your city in {state}:
          <input
            type="text"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            placeholder="Enter city name"
            style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>
        <button
          onClick={handleCitySearch}
          style={{
            marginTop: '10px',
            padding: '8px 12px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Check Availability
        </button>
        <br />

        {cityAvailable && <p style={{ color: 'green', fontWeight: 'bold' }}>City available for delivery!</p>}

        <h3>Cart Items:</h3>
        <ul>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <li key={index}>
                {item.title} - {item.size} (Quantity: {item.quantity})
              </li>
            ))
          ) : (
            <li>No items in the cart.</li>
          )}
        </ul>

        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>
        <br />
        <label>
          When do you need the water?:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>
        <br />

        <button
          type="submit"
          style={{
            padding: '10px 15px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Submit Order
        </button>
      </form>

      {orderConfirmed && (
        <div style={{ marginTop: '20px', textAlign: 'center', color: '#4CAF50' }}>
          <h2>Order Confirmed!</h2>
          <p>Your order has been successfully placed. You will be redirected to the home page shortly.</p>
        </div>
      )}

      <button
        onClick={handleLogout}
        style={{
          marginTop: '20px',
          padding: '10px 15px',
          backgroundColor: 'Teal',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Order;
