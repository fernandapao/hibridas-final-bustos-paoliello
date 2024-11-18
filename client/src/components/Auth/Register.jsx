// src/components/Auth/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/auth';

function Register() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    usuario: '',
    email: '',
    contrasenia: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { nombre, apellido, usuario, email, contrasenia } = formData;

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Error al registrarse');
    }
  };

  return (
    <div className="formulario-container">
      <h2>Registrar Usuario</h2>
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
          <label>Apellido:</label>
          <input 
            type="text" 
            name="apellido"
            value={apellido}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label>Usuario:</label>
          <input 
            type="text" 
            name="usuario"
            value={usuario}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email"
            value={email}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input 
            type="password" 
            name="contrasenia"
            value={contrasenia}
            onChange={handleChange}
            required 
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Register;
