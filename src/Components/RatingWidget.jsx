import React, { useState } from 'react';
import PropTypes from 'prop-types';

function RatingWidget({ productId, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
      setHoveredRating(0);
    } else {
      alert('Please select a valid rating between 1 and 5.');
    }
  };

  return (
    <div className="rating-widget">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= (hoveredRating || rating) ? 'filled' : ''}`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit Rating</button>
    </div>
  );
}

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default RatingWidget;