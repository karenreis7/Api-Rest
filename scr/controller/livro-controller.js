import { autor } from "../models/Autor.js";
import Livro from "../models/Livro.js";

class LivroController{

    static async listarLivros (req, res, next){
        try {

            const listaLivros = await Livro.find({}); 
            res.status(200).json(listaLivros);  
        } catch (error) {
            next(error); 
        }
    }

    static async listarLivroPorId (req, res, next){
        try {
            const id = req.params.id; 
            const livroUnico = await Livro.findById(id); 
            res.status(200).json(livroUnico);  
        } catch (error) {
            next(error);
        }
    }
    
    static async cadastrarLivro (req, res, next){

        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            const livroCriado = await Livro.create(livroCompleto); 
            res.status(201).json({ message: "Livro criado com sucesso", Livro:novoLivro });
        } catch (error) {
            next(error);
        } 
    }

    static async atualizarLivroPorId (req, res, next){
        try {
            const id = req.params.id; 
            await Livro.findByIdAndUpdate(id, req.body); 
            res.status(200).json({ message: "Livroa atualizado com sucesso!" });  
        } catch (error) {
            next(error);
        }
    }

    static async deletarLivroPorId (req, res, next){
        try {
            const id = req.params.id; 
            await Livro.findByIdAndDelete(id); 
            res.status(200).json({ message: "Livro removido com sucesso!" });  
        } catch (error) {
            next(error);
        }
    }

    static async listarLivrosPorFiltro(req, res, next){

        try {
           const busca = await processaBusca(req.query); 

            if (busca !== null) {
                const livrosResultados = await Livro
                .find(busca)
                .populate("autor"); // 1º é a propriedade que vem do livro e a 2º é da variavel que vem por param. 
            res.status(200).json(livrosResultados); 
            }else{
                res.status(200).send([]); 
            }
        } catch (error) {
            next(error);
        }
    }
}


async function processaBusca(parametros){
    const {editora, titulo, minPaginas, maxPaginas, nomeAutor } = parametros; 
        
    let busca = {};
    if(editora) busca.editora = editora; 
    if(titulo) busca.titulo = { $regex: titulo, $options: "i" };

    if(minPaginas || maxPaginas) busca.paginas = {}; 

    if(minPaginas) busca.paginas.$get = minPaginas; // get - é maior ou igual que
    if(maxPaginas) busca.paginas.$let = maxPaginas; // let - menor ou igual que 

    if(nomeAutor) {
        const autor = await autor.findOne({ nome: nomeAutor });

        if (autor !== null) {
            busca.autor = autor._id; 
        }else{
            busca = null; 
        }
      

        
    }

    return busca; 
}
export default LivroController;

