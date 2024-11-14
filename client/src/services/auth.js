
import api from './api';
import jwt_decode from 'jwt-decode';



export const login = async (email, contrasenia) => {
  const response = await api.post('/users/login', { email, contrasenia });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    return jwt_decode(response.data.token); 
  }
  throw new Error('Autenticación fallida');
};


export const register = async (userData) => {
  const response = await api.post('/users', userData);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return jwt_decode(token); 
  }
  return null;
};
