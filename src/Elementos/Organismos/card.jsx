
import React, { useState } from 'react';
import ProductGrid from './producto';
import Comentario from '../Organismos/comentario';
import imagen1 from '../imagenes/celulares_1.jpg'; 
import imagen2 from '../imagenes/compu.jpg';
import imagen3 from '../imagenes/compu2.jpg';
import imagen4 from '../imagenes/compu3.jpg';
import imagen5 from '../imagenes/audifono2.jpeg';
import imagen6 from '../imagenes/reloj.jpeg';
import imagen7 from '../imagenes/tenis.jpg';
import imagen8 from '../imagenes/playera.jpg';
import imagen9 from '../imagenes/tensi2.jpg';
import imagen10 from '../imagenes/playera2.jpg';
import imagen11 from '../imagenes/audifonos.jpg';
import imagen12 from '../imagenes/zapato.jpg';
import Descuento from '../imagenes/inicio.webp';
import '../css/stylesinicio.css';
import '../css/stylescard.css';

const HomePage = () => {
  const productsData = [
    
      { id: 1, name: 'Samsung Galaxy S22 ultra 5G (Snapdragon) Dual SIM 256 GB bora purple 8 GB RAM', price: 1639, imageUrl: imagen1, rating: 4.5 }, 
      { id: 2, name: 'Audífonos in-ear gamer KZ Auriculares con cable ZSN Pro with mic KZ ZSN Pro negro', price: 327, imageUrl: imagen5, rating: 4 }, 
      { id: 3, name: 'Ordenador Portátil Hp 15.6 (512 Ssd + 8 Gb) Ryzen 5 Fhd Wind Touch Intel N4000/4gb/64gb', price: 10889, imageUrl: imagen3,  rating: 3 }, 
      { id: 4, name: 'Camisa Hombre De Tactica Algodón Secado Rápido Manga Larga Cuello Mao Lisa', price: 298, imageUrl: imagen10,  rating: 4  }, 
      { id: 5, name: 'Laptop Hp 17 Fhd Amd Ryzen 5 ( 512 Ssd + 8gb ) Radeon Gamer', price: 10994, imageUrl: imagen2,  rating: 3  }, 
      { id: 6, name: 'Smartwatch X7+ Max Display 1.75 Corona Digital Splitdisplay', price: 248, imageUrl: imagen6,  rating: 4 }, 
      { id: 7, name: 'Imperio Legend Pro Turf TF Césped sintético Hombre Adultos ', price: 749, imageUrl: imagen9,  rating: 3  }, 
      { id: 8, name: 'Camisa Lisa Manga Larga Cuello Mao Hombre Slim Fit Casual', price: 298, imageUrl: imagen8,  rating: 4  }, 
      { id: 9, name: 'Tenis Fútbol Nike Mercurial Superfly 9 Club Tf CR7', price: 719, imageUrl: imagen7,  rating: 3  }, 
      { id: 10, name: 'Laptop Lenovo Ideapad 15.6 Ryzen 3 7320u 8gb 256gb ssd', price: 9999, imageUrl: imagen4,  rating: 4  }, 
      { id: 11, name: 'Audífonos Diadema Inalámbricos P47 En La Oreja Manos Libres', price: 199, imageUrl: imagen11,  rating: 3  }, 
      { id: 12, name: 'Tenis De Running Para Hombre Nike Revolution 5', price: 1349, imageUrl: imagen12,  rating: 5  }, 
      
  
  ];
  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (productId) => {
    setLikedProducts((prevState) => {
      return { ...prevState, [productId]: !prevState[productId] };
    });
  };

  return (
    <div className="home-page">
      <div className="discount-banner">
        <img src={Descuento} alt="Fondo de descuento" className="discount-background" />
      </div>
      <h1>Productos Destacados</h1>
      <ProductGrid products={productsData} onLikeToggle={toggleLike} likedProducts={likedProducts} />
      <Comentario />
    </div>
  );
}

export default HomePage;