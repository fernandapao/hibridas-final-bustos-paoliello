import Novedad from "../models/novedadesModel.js";
import { novedadesValidacion } from "../validaciones/validaciones.js";

export const getNovedades = async (req, res) => {
    try {
       
        const page = parseInt(req.query.page) || 1;  
        const limit = parseInt(req.query.limit) || 10; 
        const novedades = await Novedad.paginate({}, { page, limit });

        res.json({
            totalDocs: novedades.totalDocs,
            totalPages: novedades.totalPages,
            currentPage: novedades.page,
            docs: novedades.docs,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las novedades', error });
    }
};



export const createNovedad = async (req, res) => {
    //validacion
    const {error} = novedadesValidacion(req.body);
    if(error) return res.status(400).json({error:error.details[0].message})
        console.log(error)
    try {
            const novedad = new Novedad({...req.body});
            const guardarNovedades = await novedad.save();
            res.json(guardarNovedades)
    }catch(err){
        res.status(400).json({error:err.message})
    }
};

export const getNovedad = async (req, res) => {
    try {
        const novedad = await Novedad.find();
        res.json(novedad)
            
    }catch(err){
        res.status(400).json({error:err.message})
    }

};


export const getNovedadById = async (req, res) => {
    try {
        const id = req.params.id.trim();
        const novedad = await Novedad.findById(req.params.id);
        if(!novedad) return res.status(400).json({error: "no disponible"})
        res.json(novedad)
            
            
    }catch(err){
        res.status(400).json({error:err.message})
    }
};

export const updateNovedad = async (req, res) => {
    try {
        const actualizarNovedad = await Novedad.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(actualizarNovedad)
            
    }catch(err){
        res.status(400).json({error:err.message})
    }
};


export const deleteNovedad = async (req, res) => {
    try {
        const eliminarNovedad = await Novedad.findByIdAndDelete(req.params.id);
        if (eliminarNovedad) {
            res.status(200).json({ message: "Novedad eliminada correctamente", data: eliminarNovedad });
        } else {
            res.status(404).json({ message: "Novedad no encontrada" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//Buscar por categoria: infraestructura, actualizacion de software, servicio
export const buscarByCategoria = async (req, res) => {
    try {
        const categoria = req.query.categoria.split(','); 
        const novedades = await Novedad.find({ categoria: categoria }); 
        res.status(200).json(novedades); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export const buscarByNombre = async (req, res) => {
    try {
        console.log(req.query.name); 
        const buscarNombre = req.query.name;
        console.log("Buscar nombre:", req.query.name);


        const novedades = await Novedad.find({
            nombre: { $regex: buscarNombre, $options: 'i' } 
        });

        res.json(novedades);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
};
