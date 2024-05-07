import mongoose from "mongoose";
import  Mongoose  from "mongoose";
import ErroBase from "../erros/erroBase.js";
import RequisicaoIncorreta from "../erros/requisicaoIncorreta.js"
import ErroValidacao from "../erros/erroValidacao.js";
import naoEncontrado from "../erros/error404.js";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(error, req, res, next){
    if (error instanceof Mongoose.Error.CastError){
      new RequisicaoIncorreta().enviarResposta(res); 
    } else if(error instanceof mongoose.Error.ValidationError){
         new ErroValidacao(error).enviarResposta(res); 
    }else if(error instanceof naoEncontrado){
      error.enviarResposta(res);
    } else{
       new ErroBase().enviarResposta(res); 
    }   
}


export default manipuladorDeErros; 




