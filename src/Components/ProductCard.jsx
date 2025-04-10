import React from 'react';
import RatingWidget from './RatingWidget';
import PropTypes from 'prop-types';

function ProductCard({ product, onRatingSubmit }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Average Rating: {product.avgRating.toFixed(1)}</p>
      <p>Total Ratings: {product.totalRatings}</p>
      <RatingWidget
        productId={product.id}
        onRatingSubmit={onRatingSubmit}
      />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    avgRating: PropTypes.number.isRequired,
    totalRatings: PropTypes.number.isRequired,
  }).isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default ProductCard;