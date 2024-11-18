// src/components/Funciones/FuncionesList.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import '../../styles/main.css';


function FuncionesList() {
  const [funciones, setFunciones] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFunciones = async () => {
      try {
        const response = await api.get('/funciones');
        setFunciones(response.data);
      } catch (err) {
        setError('Error al obtener las funciones');
      }
    };
    fetchFunciones();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta función?')) {
      try {
        await api.delete(`/funciones/${id}`);
        // Actualizar la lista después de eliminar
        setFunciones(funciones.filter((funcion) => funcion._id !== id));
      } catch (err) {
        setError('Error al eliminar la función');
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/dashboard/funciones/editar/${id}`);
  };

  return (
    <div>
      <h2 className="titulo">Funciones</h2>
      <div className="btn-container">
      <Link to="nueva" className="btn-agregar">Agregar Nueva Función</Link>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="funciones-container">
        {funciones.map(funcion => (
          <div className="funcion-card" key={funcion._id}>
            <h3>{funcion.funcion}</h3>
            <p>{funcion.descripcion}</p>
            <div className="funcion-buttons">
              <button onClick={() => handleEdit(funcion._id)} className="btn-editar">Editar</button>
              <button onClick={() => handleDelete(funcion._id)} className="btn-eliminar">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default FuncionesList;
