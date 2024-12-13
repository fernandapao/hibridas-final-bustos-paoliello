import mensajeModel from '../models/mensajeModel.js';

const createMensaje = async (req, res) => {
    const {chatId, senderId, text} = req.body;
  try {
   const newMensaje = new mensajeModel({
    chatId,
    senderId,
    text
   })
   const responder = await newMensaje.save();
   res.status(200).json(responder)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  };


  const getMensajes = async (req, res) => {
    const chatId = req.params.chatId;
  try {
   const mensajes = await mensajeModel.find({chatId})
   res.status(200).json(mensajes)
  } catch (error) {
    res.status(500).json({ mensajes: error.message });
  }
  };

export {
    createMensaje,
    getMensajes
};