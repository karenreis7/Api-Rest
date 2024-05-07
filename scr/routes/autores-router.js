import express from "express"; 
import AutorController from "../controller/autor-controller.js";

const routes = express.Router(); 

routes.get("/autores", AutorController.listarAutores);
routes.get("/autores/:id", AutorController.listarAutoresPorId);
routes.post("/autor", AutorController.cadastrarAutor);
routes.put("/autor/:id", AutorController.atualizarAutorPorId);
routes.delete("/autor/:id",AutorController.deletarAutorPorId); 

export default routes; 