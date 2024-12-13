import express  from 'express';
import { getMensajes, createMensaje } from '../controllers/mensajesController.js';


const mensajeRoutes = express.Router();

mensajeRoutes.post('/', createMensaje);
mensajeRoutes.get('/:chatId', getMensajes);


export {mensajeRoutes};