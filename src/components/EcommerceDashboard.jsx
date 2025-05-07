import React from 'react';
import Navbar from './Navbar';
import OfferCard from './OfferCard';
import ProductCard from './ProductCard';

const EcommerceDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <OfferCard />
      <ProductCard />
    </div>
  );
};

export default EcommerceDashboard;
