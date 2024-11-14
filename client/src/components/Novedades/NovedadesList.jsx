// src/components/Novedades/NovedadesList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

function NovedadesList() {
  const [novedades, setNovedades] = useState([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 10;

  useEffect(() => {
    const fetchNovedades = async () => {
      try {
        const response = await api.get(`/novedades/paginas?page=${page}&limit=${limit}`);
        setNovedades(response.data.docs);
        setTotalPages(response.data.totalPages);
      } catch (err) {
        setError('Error al obtener las novedades');
      }
    };
    fetchNovedades();
  }, [page]);

  const handlePrev = () => {
    if(page > 1) setPage(page -1);
  };

  const handleNext = () => {
    if(page < totalPages) setPage(page +1);
  };

  return (
    <div>
      <h2>Novedades</h2>
      <Link to="nueva">Agregar Nueva Novedad</Link>
      {error && <p className="error">{error}</p>}
      <ul>
        {novedades.map(novedad => (
          <li key={novedad._id}>
            <h3>{novedad.nombre}</h3>
            <p>{novedad.descripcion}</p>
            <p>Categoría: {novedad.categoria}</p>
            <p>Fecha: {new Date(novedad.fecha).toLocaleDateString()}</p>
            {/* Puedes agregar enlaces para editar o eliminar */}
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={handlePrev} disabled={page ===1}>Anterior</button>
        <span>Página {page} de {totalPages}</span>
        <button onClick={handleNext} disabled={page === totalPages}>Siguiente</button>
      </div>
    </div>
  );
}

export default NovedadesList;
