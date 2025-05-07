import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardContext } from './DashboardContext';

const CartPage = () => {
  const context = useContext(DashboardContext);
  const navigate = useNavigate();

  if (!context) {
    return <p className="text-red-500">DashboardContext not available.</p>;
  }

  const { cart } = context;

  const goHome = () => navigate('/');
  
  const total = cart.reduce((sum, item) => {
    const numericPrice = Number(item.price.replace(/[^\d.]/g, '')); // Removes ₹ and converts to number
    return sum + numericPrice;
  }, 0);


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          <i className="fas fa-shopping-cart mr-2"></i>Your Cart
        </h1>

        <button
          onClick={goHome}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          <i className="fas fa-home mr-2"></i>Back to Home
        </button>
      </header>

      {cart.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md max-w-md">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-gray-700 mb-2">{item.price}</p>
            </div>
          ))}

          <div className="bg-white p-4 rounded shadow-md max-w-md">
            <h3 className="text-xl font-semibold mb-2">Total: ₹ {total} /-</h3>
            <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
              <i className="fas fa-credit-card mr-2"></i>Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
