import ErroBase from "./erroBase.js"

class RequisicaoIncorreta extends ErroBase{
    constructor( mensagem = "Dados fornecidos estão incorretos"){
        super(mensagem, 400); 
    }
}

export default RequisicaoIncorreta; 