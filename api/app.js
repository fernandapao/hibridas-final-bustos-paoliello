import express from 'express';
import mongoose from 'mongoose';
import { usersRoutes, usersRoutes, funcionesroutes } from './routes/index.js';
import 'dotenv/config';
import cors from "cors"

mongoose.connect("mongodb://127.0.0.1:27017/aplihibridas", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {console.log('Conectado a MongoDB...')
})
    .catch(err => console.log('No se pudo conectar con MongoDB..', err));


const app = express();

//para error de cors
// const options = {
//     origin: 'https://ejemplo.com',
//     methods: ['GET', 'POST'],
//     AllowedHeathers: ['Content-Type', 'Authorization'],
//     credentials: true
    
// }

// app.use(cors(options));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req, res) => {
    res.send("aplihibridas database");
});

app.use('/users', usersRoutes);
app.use('/novedades', novedadesroutes);
app.use('/funciones', funcionesroutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Conexión con Mongo exitosa!`);
})