// src/components/atoms/Logo.js
import React from 'react';

function Logo({ src, alt }) {
  return <img src={src} alt={alt} className="logo-image" />;
}

export default Logo;
