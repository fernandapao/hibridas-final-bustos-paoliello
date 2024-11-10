import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  
  // Función para manejar la creación de un usuario
  const handleAddUser = async (e) => {
    e.preventDefault();
    const newUser = {
      name,
      description,
    };

    try {
      await axios.post('http://localhost:3000/usersModel', newUser);
      setName('');
      setDescription('');
    } catch (err) {
      console.log(err);
    }
  };

  // Función para manejar la creación de una novedad
  const handleAddNovedad = async (e) => {
    e.preventDefault();
    const newNovedad = {
      name,
      description,
    };

    try {
      await axios.post('http://localhost:3000/novedadesModel', newNovedad);
      setName('');
      setDescription('');
    } catch (err) {
      console.log(err);
    }
  };

  // Función para manejar la creación de una función
  const handleAddFuncion = async (e) => {
    e.preventDefault();
    const newFuncion = {
      name,
      description,
    };

    try {
      await axios.post('http://localhost:3000/funcionesModel', newFuncion);
      setName('');
      setDescription('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Users, Novedades, and Funciones</h1>

      <form onSubmit={handleAddUser}>
        <h2>Create User</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>

      <form onSubmit={handleAddNovedad}>
        <h2>Create Novedad</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Novedad</button>
      </form>

      <form onSubmit={handleAddFuncion}>
        <h2>Create Funcion</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Funcion</button>
      </form>
    </div>
  );
};

export default Home ;
