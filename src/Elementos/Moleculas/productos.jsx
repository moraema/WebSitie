import React, { useState } from 'react';
import Star from '../Moleculas/calificacion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product, onLikeToggle, priceStyle,  borderStyle, }) => {
  
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    onLikeToggle(product.id); 
  };

  
  const isRed =  product.id === 1 || product.id === 2;


  return (
    <div className={`product-card ${borderStyle}`} key={product.id}>
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className={`price ${priceStyle}`}>${product.price}</p>
      <Star rating={product.rating} isRed={isRed} />
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
