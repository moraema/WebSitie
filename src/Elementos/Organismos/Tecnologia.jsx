
import React, { useState } from 'react';
import ProductGrid from './producto';
import tecnologia2 from '../imagenes/tecnologia1.jpg';
import tecnologia4 from '../imagenes/tecnologia2.jpeg';
import tecnologia6 from '../imagenes/tecnologia3.jpg';
import tecnologia7 from '../imagenes/tecnologia4.jpg';
import tecnologia8 from '../imagenes/tecnologia5.jpg';
import tecnologia9 from '../imagenes/tecnologia6.jpeg';
import tecnologia10 from '../imagenes/tecnologia7.jpg';
import tecnologia11 from '../imagenes/tecnologia8.jpg';
import tecnologia12 from '../imagenes/tecnologia9.jpg';


import '../css/stylescard.css';

const Tecnologia = () => {
  const productsData = [
      { id: 4, name: 'Controlador de DJ de inicio con tarjeta de sonido incorporada y espectáculo de luces Numark Party Mix', price: 2225, imageUrl: tecnologia10,  rating: 5  }, 
      { id: 5, name: 'Gafas 3D inteligentes de realidad Virtual, auriculares VR, casco estéreo VR con gafas', price: 499, imageUrl: tecnologia2,  rating: 4  }, 
      { id: 6, name: 'Sony PlayStation 5 Edición Digital 825GB FIFA 23 Bundle color blanco y negro', price: 14120, imageUrl: tecnologia6,  rating: 4 }, 
      { id: 7, name: 'DAHUA IPCK35N - Camara IP cubo 3 MP WiFi / Lente 2.8 mm / Sensor PIR / Entrada y salida de alarma', price: 499, imageUrl:  tecnologia9,  rating: 3  }, 
      { id: 8, name: 'Smart TV Samsung Series 7 UN50TU700DFXZA LED Tizen 4K 50" 110V - 120V', price: 7998, imageUrl: tecnologia8,  rating: 4  }, 
      { id: 9, name: 'Consola Xbox Series X 1 TB Bundle Diablo IV Negro Premium Edition - Consola', price: 9999, imageUrl: tecnologia7,  rating: 3  }, 
      { id: 10, name: 'Auriculares Gafas Realidad Teléfono móvil Películas 3D Gafas 4-6 perfke Auriculares de realidad virtual', price: 488, imageUrl: tecnologia4,  rating: 4  }, 
      { id: 11, name: 'SAMSUNG Galaxy S22 Ultra, Teléfono Inteligente Android Desbloqueado De Fábrica, 512 GB, Cámara Y Video De 8K', price: 11329, imageUrl: tecnologia11,  rating: 3  }, 
      { id: 12, name: 'Laptop Dell Inspiron 3515 plateada 15.5", AMD Ryzen 5 3450U 16GB de RAM 1TB HDD 256GB SSD, AMD Radeon RX Vega 8 (Ryzen 2000/3000) 1366x768px Windows 11 Home', price: 11999, imageUrl: tecnologia12,  rating: 5  }, 
      
  
  ];
  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (productId) => {
    setLikedProducts((prevState) => {
      return { ...prevState, [productId]: !prevState[productId] };
    });
  };

  return (
    <div className="home-page">
      <h1>Tecnología</h1>
      <ProductGrid products={productsData} onLikeToggle={toggleLike} likedProducts={likedProducts} />
    </div>
  );
}

export default Tecnologia;
