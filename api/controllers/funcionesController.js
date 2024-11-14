import Funciones from "../models/funcionesModel.js"

export const createFuncion = async (req, res) => {
    //validacion
    const {error} = funcionesValidacion(req.body);
    if(error) return res.status(400).json({error:error.details[0].message})
        console.log(error)
    try {
            const funcion = new Funciones({...req.body});
            const guardarFunciones = await funcion.save();
            res.json(guardarFunciones)
    }catch(err){
        res.status(400).json({error:err.message})
    }
};

export const getFuncion = async (req, res) => {
    try {
        const funcion = await Funciones.find();
        res.json(funcion)
            
    }catch(err){
        res.status(400).json({error:err.message})
    }
};

export const getFuncionById = async (req, res) => {
    try {
        const funcion = await Funciones.findById(req.params.id);
        if(!funcion) return res.status(400).json({error: "no disponible"})
        res.json(funcion)
            
            
    }catch(err){
        res.status(400).json({error:err.message})
    }
};

export const updateFuncion = async (req, res) => {
    try {
        const actualizarFuncion = await Funciones.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(actualizarFuncion)
            
    }catch(err){
        res.status(400).json({error:err.message})
    }
};

export const deleteFuncion = async (req, res) => {
    try {
        const eliminarFuncion = await Funciones.findByIdAndDelete(req.params.id)
        if (eliminarFuncion){
            res.status(200).json({ message: "Función eliminada correctamente", data: eliminarFuncion });
        } else {
            res.status(404).json({ message: "Función no encontrada" });
        }
            
    }catch(err){
        res.status(500).json({error:err.message})
    }
};

//Buscar por funcion: mapa, asistencia, informacion
export const buscarByFuncion = async (req, res) => {
    try {
        const funcion = req.query.funcion;
        const funciones = await Funciones.find({ funcion: funcion }); 
        res.status(200).json(funciones); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

