// src/components/Funciones/FuncionForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

function FuncionForm() {
  const [formData, setFormData] = useState({
    funcion: '',
    descripcion: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { funcion, descripcion } = formData;

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await api.post('/funciones', formData);
  //     navigate('/dashboard/funciones');
  //   } catch (err) {
  //     setError(err.response?.data?.error || 'Error al crear la función');
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData); // Verifica los datos antes de enviarlos
    try {
      await api.post('/funciones', formData);
      navigate('/dashboard/funciones');
    } catch (err) {
      console.error('Error al enviar los datos:', err);
      setError(err.response?.data?.error || 'Error al crear la función');
    }
};


  return (
    <div>
      <h2>Agregar Nueva Función</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Función:</label>
          <input 
            type="text" 
            name="funcion"
            value={funcion}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea 
            name="descripcion"
            value={descripcion}
            onChange={handleChange}
            required 
          ></textarea>
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default FuncionForm;
