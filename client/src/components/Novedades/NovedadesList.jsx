// src/components/Novedades/NovedadesList.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';

function NovedadesList() {
  const [novedades, setNovedades] = useState([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();
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

  const handleDelete = async (id) => {
    try {
      await api.delete(`/novedades/${id}`);
      setNovedades(novedades.filter(novedad => novedad._id !== id)); // Actualizar la lista
    } catch (err) {
      setError('Error al eliminar la novedad');
    }
  };

  const handleEdit = (id) => {
    navigate(`/dashboard/novedades/editar/${id}`);
  };

  return (
    <div>
  <h2 className="titulo">Novedades</h2>
  <div className="btn-container">
    <Link to="nueva" className="btn-agregar">Agregar Nueva Novedad</Link>
  </div>
  {error && <p className="error">{error}</p>}
  <div className="novedades-container">
    {novedades.map(novedad => (
      <div className="novedad-card" key={novedad._id}>
        <h3>{novedad.nombre}</h3>
        <p>{novedad.descripcion}</p>
        <p>Categoría: {novedad.categoria}</p>
        <p>Fecha: {new Date(novedad.fecha).toLocaleDateString()}</p>
        <div className="novedad-buttons">
          <button onClick={() => handleEdit(novedad._id)} className="btn-editar">Editar</button>
          <button onClick={() => handleDelete(novedad._id)} className="btn-eliminar">Eliminar</button>
        </div>
      </div>
    ))}
  </div>

  <div className="pagination">
    <button onClick={handlePrev} disabled={page === 1}>Anterior</button>
    <span>Página {page} de {totalPages}</span>
    <button onClick={handleNext} disabled={page === totalPages}>Siguiente</button>
  </div>
</div>
  );
}

export default NovedadesList;
