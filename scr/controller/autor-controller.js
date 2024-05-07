
import { autor } from "../models/Autor.js";
import naoEncontrado from "../erros/error404.js"

class AutorController{

    static async listarAutores (req, res, next){
        try {
            const listaAutores = await autor.find({}); 
            res.status(200).json(listaAutores);  
        } catch (error) {
            next(error);
        }
    }

    static async listarAutoresPorId (req, res, next){
        try {
            const id = req.params.id; 
            const autorUnico = await autor.findById(id); 
            if (autorUnico !== null){
                res.status(200).json(autorUnico); 
            }else{
               next(new naoEncontrado("falha ao tentar buscar o Autor")); 
            }
        } catch (error) {
           next(error); 
        }
    }
    
    static async cadastrarAutor (req, res, next){
        try {
            const novoAutor = await autor.create(req.body); 
            res.status(201).json({ message: "Autor cadastrado com sucesso", autor:novoAutor });
        } catch (error) {
            next(error);
        } 
    }

    static async atualizarAutorPorId (req, res, next){
        try {
            const id = req.params.id; 
            await autor.findByIdAndUpdate(id, req.body); 

            if(autor !== null){
                res.status(200).json({ message: "Autor atualizado com sucesso!" });  
            }else{
                next(new naoEncontrado("Id do autor não localizado"));
            } 
        } catch (error) {
            next(error)
        }
    }

    static async deletarAutorPorId (req, res, next){
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id); 

            if(autor !== null){
                res.status(200).json({ message: "Autor removido com sucesso!" });  
            }else{
                next(new naoEncontrado("Id do autor não localizado")); 
            }
        } catch (error) {
            next(error)
        }
    }
}

export default AutorController; 

