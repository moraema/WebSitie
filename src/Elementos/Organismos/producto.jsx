import React from 'react';
import ProductCard from '../Moleculas/productos';

const ProductGrid = ({ products, onLikeToggle, likedProducts }) => {
  return (
    <div className="product-grid" >
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          onLikeToggle={onLikeToggle}
          isLiked={likedProducts[product.id]}
          index={index}
          priceStyle={index < 2 ? 'blue-price' : 'red-price'}
          borderStyle={index < 2 ? 'blue-border' : 'orange-border'}
          
        />
      ))}
    </div>
  );
}

export default ProductGrid;