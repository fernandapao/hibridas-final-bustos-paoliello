// src/components/Novedades/NovedadForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

function NovedadForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    categoria: '',
    fecha: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { nombre, descripcion, categoria, fecha } = formData;

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/novedades', formData);
      navigate('/dashboard/novedades');
    } catch (err) {
      setError(err.response?.data?.error || 'Error al crear la novedad');
    }
  };

  return (
    <div>
      <h2>Agregar Nueva Novedad</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input 
            type="text" 
            name="nombre"
            value={nombre}
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
        <div>
          <label>Categoría:</label>
          <input 
            type="text" 
            name="categoria"
            value={categoria}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label>Fecha:</label>
          <input 
            type="date" 
            name="fecha"
            value={fecha}
            onChange={handleChange}
            required 
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default NovedadForm;
