import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'Description 1', image: 'image1.jpg', avgRating: 4.0, totalRatings: 10 },
    { id: 2, name: 'Product 2', description: 'Description 2', image: 'image2.jpg', avgRating: 3.5, totalRatings: 8 },
    // Add more products as needed
  ]);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              avgRating: ((product.avgRating * product.totalRatings + newRating) / (product.totalRatings + 1)),
              totalRatings: product.totalRatings + 1,
            }
          : product
      )
    );
  };

  return (
    <div className="app">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRatingSubmit={handleRatingSubmit} />
      ))}
    </div>
  );
};

export default App;