import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Elementos/Organismos/nav';
import Card from './Elementos/Organismos/card';
import Calzados from './Elementos/Organismos/calzados';
import Modas from './Elementos/Organismos/modas';
import Tecnologias from './Elementos/Organismos/Tecnologia';
import Footer from './Elementos/Organismos/footer'; 



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/tecnologia" element={<Tecnologias />} />
          <Route path="/modas" element={<Modas />} />
          <Route path="/calzados" element={<Calzados />} />
         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;