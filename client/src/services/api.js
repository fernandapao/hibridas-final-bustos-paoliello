import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
});

// Agregar el token a las solicitudes si existe
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if(token){
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
