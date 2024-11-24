import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import axios from "axios";
import useDebounce from '../../hooks/useDebounce';

function NovedadesList() {
  const [novedades, setNovedades] = useState([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const debouncedSearch = useDebounce(search, 1000);

  const navigate = useNavigate();
  const limit = 4;

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

    if (debouncedSearch) {
        handleSearch(debouncedSearch);
    } else {
        fetchNovedades();
        setSuggestions([]);
    }
}, [debouncedSearch, page]);

  const handlePrev = () => {
    if(page > 1) setPage(page -1);
  };

  const handleNext = () => {
    if(page < totalPages) setPage(page +1);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta novedad?')) {
      try {
        await api.delete(`/novedades/${id}`);
        setNovedades(novedades.filter(novedad => novedad._id !== id));
      } catch (err) {
        setError('Error al eliminar la novedad');
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/dashboard/novedades/editar/${id}`);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSearch = async (searchName) => {
    try{
      const res = await axios.get('http://localhost:3000/novedades/buscar/nombre', {
        params: {
          name:searchName
        }
      })
      setNovedades(res.data)
      setSuggestions([])
    }catch(err){
      console.log(err)
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion);
    handleSearch(suggestion)
  }

  return (
    <div>
  <h2 className="titulo">Novedades</h2> 
  <div className="btn-container">
    <Link to="nueva" className="btn-agregar">Agregar Nueva Novedad</Link>
  </div>

  <form className='buscador'>
    <input type="text" placeholder='Buscar por nombre' value={search} onChange={handleSearchChange} className='input-buscar'/>
    <button type='submit' className='button-buscar'>Buscar</button>
    {
      suggestions.length > 0 && (
      <ul>
        {
          suggestions.map((suggestion) => (
            <li onClick={()=> handleSuggestionClick (suggestion.name)} key={suggestion._id}>{suggestion.name}</li>
          ))
        }
      </ul>
      )
    }
  </form>
  
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
