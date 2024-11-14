// src/components/Funciones/FuncionesList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

function FuncionesList() {
  const [funciones, setFunciones] = useState([]);
  const [error, setError] = useState('');

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

  return (
    <div>
      <h2>Funciones</h2>
      <Link to="nueva">Agregar Nueva Función</Link>
      {error && <p className="error">{error}</p>}
      <ul>
        {funciones.map(funcion => (
          <li key={funcion._id}>
            <h3>{funcion.funcion}</h3>
            <p>{funcion.descripcion}</p>
            {/* Puedes agregar enlaces para editar o eliminar */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FuncionesList;
