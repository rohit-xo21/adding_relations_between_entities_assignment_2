import React, { useState } from 'react';
import './RatingWidget.css';

const RatingWidget = ({ productId, onRatingSubmit }) => {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleStarClick = (value) => {
        setRating(value);
    };

    const handleStarHover = (value) => {
        setHoveredRating(value);
    };

    const handleStarLeave = () => {
        setHoveredRating(0);
    };

    const handleSubmit = () => {
        if (rating >= 1 && rating <= 5) {
            onRatingSubmit(productId, rating);
            setRating(0); // Reset rating after submission
        }
    };

    return (
        <div className="rating-widget">
            {[1, 2, 3, 4, 5].map((value) => (
                <span
                    key={value}
                    className={`star ${value <= (hoveredRating || rating) ? 'filled' : ''}`}
                    onClick={() => handleStarClick(value)}
                    onMouseEnter={() => handleStarHover(value)}
                    onMouseLeave={handleStarLeave}
                >
                    ★
                </span>
            ))}
            <button onClick={handleSubmit} disabled={rating === 0}>
                Submit Rating
            </button>
        </div>
    );
};

export default RatingWidget;