import express from 'express';
import mongoose from 'mongoose';
import { usersRoutes, novedadesRoutes, funcionesRoutes } from './routes/index.js';
import 'dotenv/config';
import cors from "cors";



mongoose.connect('mongodb://127.0.0.1:27017/aplihibridas')
  .then(() => console.log('Conexión con Mongo exitosa!'))
  .catch((error) => console.error('Error al conectar con MongoDB:', error));


const app = express();


//para error de cors
const options = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    AllowedHeathers: ['Content-Type', 'Authorization'],
    credentials: true
    
}

app.use(cors(options));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req, res) => {
    res.send("aplihibridas database");
});

app.use('/users', usersRoutes);
app.use('/novedades', novedadesRoutes);
app.use('/funciones', funcionesRoutes);

function verificarRol(rolesAdmitidos) {
    return function(req, res, next){
        const rolUsuario =req.headers['x-rol'];

        if(rolesAdmitidos.includes(rolUsuario)){
            next();
        } else {
            res.status(403).json({mensaje: "Acceso denegado"})
        }
    }
}

app.get("/panel", verificarRol(["admin", "super-admin"]), (req, res) =>{
    res.send("Acceso permitido")
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Conexión con Mongo exitosa!`);
});

