import React from 'react';
import SocialLink from '../Atomos/link';
import Icon from '../Atomos/icono'; // Importa el componente Icon
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


function SocialLinks() {
  return (
    <div className="footer-section social">
      <h2>Redes Sociales</h2>
      <SocialLink icon={<Icon icon={faFacebook} />} label="Facebook" url="#" />
      <SocialLink icon={<Icon icon={faTwitter} />} label="Twitter" url="#" />
      <SocialLink icon={<Icon icon={faInstagram} />} label="Instagram" url="#" />
    </div>
  );
}

export default SocialLinks;
