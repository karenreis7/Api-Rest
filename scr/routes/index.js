import express from "express"; 
import livros from "./router.js"
import autores from "./autores-router.js"

const routes = (app) => {

    app.route('/').get((req, res) => res.status(200).send("curso de node.js"));
    app.use(express.json(), livros, autores);

}; 


export default routes; 