import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";
const Schema = mongoose.Schema;


const livroSchema = new Schema({
    id: { type: Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String, required: true },
    preco: { type: Number },
    paginas: { type: Number, min:10, max:5000 }, 
    autor: { autorSchema }
}, { versionKey: false}); 


const Livro = mongoose.model('Livro', livroSchema);

export default Livro; 






