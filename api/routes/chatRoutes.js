import express  from 'express';
import { findUserChats, createChat, findChat } from '../controllers/chatController.js';


const chatRoutes = express.Router();

chatRoutes.post('/', createChat);
chatRoutes.get('/:userId', findUserChats);
chatRoutes.get('/find/:firstId/:secondId', findChat);


export {chatRoutes};