import React from 'react';
import FooterSection from '../Moleculas/Sesion';
import SocialLinks from '../Moleculas/red';
import '../css/stylesfooter.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <FooterSection title="Contacto" content={['Online Shop', 'Correo: onlineshop@gmail.com', 'Teléfono: +52 932 111 4713']} />
        <FooterSection title="Ubicación" content={['Blvd. Belisario Domínguez 2381, Santa elena', 'Tuxtla Gutierrez, Chiapas, Mexico']} />
        <SocialLinks />
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Online Shop. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
