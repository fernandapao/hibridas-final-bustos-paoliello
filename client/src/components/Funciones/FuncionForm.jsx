// src/components/Funciones/FuncionForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams  } from 'react-router-dom';
import api from '../../services/api';

function FuncionForm() {
  const [formData, setFormData] = useState({
    funcion: '',
    descripcion: ''
  });
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Si hay un ID, cargar los datos de la función para editar
    if (id) {
      const fetchFuncion = async () => {
        try {
          const response = await api.get(`/funciones/${id}`);
          setFormData(response.data); // Precarga los datos en el formulario
        } catch (err) {
          setError('Error al cargar la función');
        }
      };
      fetchFuncion();
    }
  }, [id]);

  const { funcion, descripcion } = formData;

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    try {
      if (id) {
        // Si hay un ID, actualizar la función existente
        await api.put(`/funciones/${id}`, formData);
      } else {
        // Si no hay ID, crear una nueva función
        await api.post('/funciones', formData);
      }
      navigate('/dashboard/funciones'); // Redirigir a la lista de funciones
    } catch (err) {
      console.error('Error al enviar los datos:', err);
      setError(err.response?.data?.error || 'Error al guardar la función');
    }
};


  return (
    <div className='formulario-container'>
     <h2>{id ? 'Editar Función' : 'Agregar Nueva Función'}</h2>
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
        <button type="submit">{id ? 'Actualizar' : 'Guardar'}</button>
      </form>
    </div>
  );
}

export default FuncionForm;
