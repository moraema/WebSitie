import React from 'react';
import InputField from '../Atomos/inputmodal';

function Formulario({ formData, handleChange, handleSubmit }) {
    return (
      <form onSubmit={handleSubmit}>
        <InputField label="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
        <InputField label="Apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} />
        <InputField label="Teléfono" name="telefono" value={formData.telefono} onChange={handleChange} />
        <InputField label="Correo" name="correo" value={formData.correo} onChange={handleChange} />
        <div className="form-group">
          <label htmlFor="comentarios">Comentarios:</label>
          <textarea
            id="comentarios"
            name="comentarios"
            value={formData.comentarios}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="button" type="submit">Completar</button>
      </form>
    );
  }

  export default Formulario;