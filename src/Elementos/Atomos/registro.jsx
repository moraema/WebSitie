import React, { useState } from 'react';
import '../css/stylesformulario.css';
import '../css/registro.css';
import Formulario from '../Moleculas/formulario';

function ModalForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    telefono: '',
    correo: '',
    comentarios: '',
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    closeModal();
  };

  return (
    <div>
      <button className="registrarse-link" onClick={openModal}>
        <div className="registrarse">
          <span className="registro-text">Llenar Formulario</span>
        </div>
      </button>
      {isOpen && (
        <div className="custom-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>X</button>
            <h2>Formulario de registro</h2>
            <Formulario formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            <p>Al llenar este formulario  aceptas las notificaciones de nuevos productos. ¡Gracias!</p>
          </div>
        </div>
      )}
    </div>
  );
}


export default ModalForm;
