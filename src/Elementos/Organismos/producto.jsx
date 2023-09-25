
import React from 'react';
import ProductCard from '../Moleculas/productos';


const ProductGrid = ({ products, onLikeToggle }) => (
  <div className="product-grid">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} onLikeToggle={onLikeToggle} />
    ))}
  </div>
);

export default ProductGrid;
