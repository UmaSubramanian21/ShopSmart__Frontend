import React, { useContext } from 'react';
import { DashboardContext } from './DashboardContext';
import { useNavigate } from 'react-router';

const ProductCard = () => {

  const { products, addToCart } = useContext(DashboardContext);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart'); // Navigate to cart page
  };

  return (
    <>
    
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">Our Products</h2>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded p-4 w-60 text-center">
              <img src={product.image} alt={product.name} id="image" className="mx-auto mb-3" />
              <h3 className="font-semibold text-md">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button
                onClick={() => { handleAddToCart(product) }}
                className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                <i className="fas fa-shopping-cart mr-2"></i>Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductCard;
