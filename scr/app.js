import express from 'express'; 
import conectarBanco from './config/dbConnect.js';
import routes from './routes/index.js';
import manipuladorDeErros from './middlewares/manipuladorDeErrors.js';

const conexao = await conectarBanco(); 

conexao.on("error", (error) => {
    console.error("erro de conexão", error);
})

conexao.once("open", () => {
    console.log("Conexão feita com sucesso!");
})

const app = express(); 
routes(app); 


app.use(manipuladorDeErros); 

export default app; 

