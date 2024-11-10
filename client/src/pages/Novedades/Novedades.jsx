import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const NovedadesView = () => {
  const {id} = useParams();
  const [novedad, setNovedad] = useState({
    name: "",
    description: ""
  });
  const [novedades, setNovedades] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filterCategoria, setFilterCategoria] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);

  const fetchNovedadDetails = async () => {
    setLoading(true)
    try{
      const res = await axios.get(`http://localhost:3000/novedadesModel/${id}`, {
        params: {
          nombre: search,
          categoria: filterCategoria,
          sortBy: sort,
          page, 
          limit
        }
      })
      console.log(res.data)
      setNovedad(res.data.novedad)  // Ajustado para el objeto 'novedad'
      setNovedades(res.data.novedades)  // Ajustado para el array de novedades
      setLoading(false)
    }catch(err){
      console.log(err)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNovedadDetails()
  }, [id, search, filterCategoria, sort, page, limit])

  if(loading) return <p>Loading...</p>

  return (
    <div>
      <h1>{novedad.name}</h1>
      <p>{novedad.description}</p>
      {/* Aquí puedes mapear las novedades y mostrarlas */}
      {novedades.map((item) => (
        <div key={item._id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default NovedadesView;
