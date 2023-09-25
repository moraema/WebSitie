import React, { useState } from 'react';
import Star from '../Moleculas/calificacion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product, onLikeToggle }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    onLikeToggle(product.id); 
  };

  return (
    <div className="product-card" key={product.id}>
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">Precio: ${product.price}</p>
      <Star rating={product.rating} />
      <FontAwesomeIcon
        icon={isLiked ? heartSolid : heartRegular}
        color={isLiked ? 'red' : 'gray'}
        onClick={toggleLike}
        className="heart-icon"
      />
    </div>
  );
};

export default ProductCard;
