// src/components/Novedades/NovedadForm.jsx
import React, { useState, useEffect } from 'react';
import {  useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';

function NovedadForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    categoria: '',
    fecha: ''
  });
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchNovedad = async () => {
        try {
          const response = await api.get(`/novedades/${id}`);
          setFormData(response.data);
        } catch (err) {
          setError('Error al cargar la novedad', err);
        }
      };
      fetchNovedad();
    }
  }, [id]);


  const { nombre, descripcion, categoria, fecha } = formData;

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await api.put(`/novedades/${id}`, formData);
      } else {
        await api.post('/novedades', formData);
      }
      navigate('/dashboard/novedades');
    } catch (err) {
      setError(err.response?.data?.error || 'Error al guardar la novedad');
    }
  };

  return (
    <div className='formulario-container'>
      <h2>{id ? 'Editar Novedad' : 'Agregar Nueva Novedad'}</h2>
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
        <button type="submit">{id ? 'Actualizar' : 'Guardar'}</button>
      </form>
    </div>
  );
}

export default NovedadForm;
