import naoEncontrado from "../erros/error404.js";


function manipulador404(req, res, next){
   const erro404 = new  naoEncontrado(); 
   next(erro404)
}

export default manipulador404; 