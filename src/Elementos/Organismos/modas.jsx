
import React, { useState } from 'react';
import ProductGrid from './producto';
import imagen2 from '../imagenes/modas1.jpg';
import imagen3 from '../imagenes/modas2.jpeg';
import imagen5 from '../imagenes/modas3.jpg';
import imagen6 from '../imagenes/modas4.jpg';
import imagen7 from '../imagenes/modas5.jpg';
import imagen8 from '../imagenes/modas6.jpg';
import imagen9 from '../imagenes/modas7.jpeg';
import imagen10 from '../imagenes/modas8.jpg';
import imagen12 from '../imagenes/modas9.jpg';


import '../css/stylescard.css';

const Modas = () => {
  const productsData = [
      { id: 2, name: 'PLAYERA HARRY POTTER GRYFFINDOR QUIDDITCH ROJA MEDIANA', price: 502, imageUrl: imagen5, rating: 4 }, 
      { id: 3, name: 'Bañadores De Moda Para Hombre, Con Cordón De Cintura Elástica Atlético Para Verano', price: 193, imageUrl: imagen3,  rating: 3 }, 
      { id: 4, name: 'USAdidas ORIGINALS Cloudfoam Advantage - Tenis para Hombre, Blanco, 7.5 Modelo Profesional', price: 1129, imageUrl: imagen10,  rating: 4  }, 
      { id: 5, name: 'Gildan Sudadera con Capucha Juvenil, Estilo G18500b Sudadera con Capucha para Unisex Niños', price: 385, imageUrl: imagen2,  rating: 3  }, 
      { id: 6, name: 'Playera Cuello Redondo Manga Larga para Caballero · 50% Algodón 50% Poliéster · Color Negro Jaspe', price: 115, imageUrl: imagen6,  rating: 4 }, 
      { id: 7, name: 'BOTAS CASUAL HOMBRE DE TIMBERLAND SENECA BAY MID TB0A62DD231', price: 2599, imageUrl: imagen9,  rating: 3  }, 
      { id: 8, name: 'Mochila Xtrem West 358 Color Negro Diseño de la tela Liso 4156 Space Grande', price: 1150, imageUrl: imagen8,  rating: 4  }, 
      { id: 9, name: 'Gorra Under Armour Shadow Run Ajustable Con Logo Para Hombre 1369795-001', price: 289, imageUrl: imagen7,  rating: 3  },
      { id: 12, name: 'Xtreme Life Par de Mancuerna Hexagonal en Acero Inoxidable con Recubrimiento Forro Caucho 5Lbs , 10Lbs , 15Lbs , 20Lbs , 25Lbs Ejercio Gym ', price: 1248, imageUrl: imagen12,  rating: 5  }, 
      
  ];
  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (productId) => {
    setLikedProducts((prevState) => {
      return { ...prevState, [productId]: !prevState[productId] };
    });
  };

  return (
    <div className="home-page">
      <h1>Modas</h1>
      <ProductGrid products={productsData} onLikeToggle={toggleLike} likedProducts={likedProducts} />
    </div>
  );
}

export default Modas;
