
import React, { useState } from 'react';
import ProductGrid from './producto';
import imagen2 from '../imagenes/hogar1.jpg';
import imagen3 from '../imagenes/hogar2.jpg';
import imagen5 from '../imagenes/hogar3.jpg';
import imagen6 from '../imagenes/hogar4.jpg';
import imagen7 from '../imagenes/hogar5.jpg';
import imagen8 from '../imagenes/hogar6.jpg';
import imagen9 from '../imagenes/hogar7.jpg';
import imagen10 from '../imagenes/hogar8.jpg';
import imagen12 from '../imagenes/hogar9.jpg';


import '../css/stylescard.css';

const Hogar = () => {
  const productsData = [
      { id: 2, name: 'Candelabro moderno, lámpara de 3 luces para comedor, lámpara dorada de altura ajustable', price: 259, imageUrl: imagen5, rating: 5 }, 
      { id: 3, name: 'Zapatero Organizador Zapatos 12 Niveles Compartimientos Metal con marco estable', price: 204, imageUrl: imagen3,  rating: 4 }, 
      { id: 4, name: 'RACK & PACK Set de 2 Bancos Altos para Barra de Cocina Desayunador Color Negro Silla Alta Giratoria 360°', price: 1759, imageUrl: imagen10,  rating: 3  }, 
      { id: 5, name: 'Escritorio Es0111-cl 140x150 Bachiller Blanco Escuadra 120x148  Repisas Librero Cajon', price: 3855, imageUrl: imagen2,  rating: 4  }, 
      { id: 6, name: 'IR Imperial Rooms Juego de sábanas de tamaño matrimonial: sábanas de 4 piezas grises de microfibra cepillada suave', price: 715, imageUrl: imagen6,  rating: 3 }, 
      { id: 7, name: 'Batidora De Pedestal Y Mano Inmersion 7 Velocidades 250w You Color Rojo Frecuencia 50 / 60hz', price: 399, imageUrl: imagen9,  rating: 5  }, 
      { id: 8, name: 'ULTICOR Sofá de dos plazas reclinable con funda de consola central, fundas de sofá reclinable de terciopelo elástico', price: 1150, imageUrl: imagen8,  rating: 4  }, 
      { id: 9, name: 'Set De 5 Portaretrato Pared Modernos Decorativos Marco', price: 289, imageUrl: imagen7,  rating: 4  },
      { id: 12, name: 'FurnitureR Juego de 2 Mesas Auxiliares Triangulares Mesita Auxiliar Mesa de Centro Mesita ', price: 1374, imageUrl: imagen12,  rating: 3}, 
      
  ];
  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (productId) => {
    setLikedProducts((prevState) => {
      return { ...prevState, [productId]: !prevState[productId] };
    });
  };

  return (
    <div className="home-page">
      <h1>Hogar y muebles</h1>
      <ProductGrid products={productsData} onLikeToggle={toggleLike} likedProducts={likedProducts} />
    </div>
  );
}

export default Hogar;
