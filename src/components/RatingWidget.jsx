import React, { useState } from 'react';
import './RatingWidget.css';

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleRatingHover = (value) => {
    setHoveredRating(value);
  };

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
    }
  };

  return (
    <div className="rating-widget">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`star ${value <= (hoveredRating || rating) ? 'filled' : ''}`}
          onClick={() => handleRatingClick(value)}
          onMouseEnter={() => handleRatingHover(value)}
          onMouseLeave={() => handleRatingHover(0)}
        >
          ★
        </span>
      ))}
      <button onClick={handleSubmit}>Submit Rating</button>
    </div>
  );
};

export default RatingWidget;