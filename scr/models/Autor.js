import mongoose from "mongoose";
const Schema = mongoose.Schema;

const autorSchema = new Schema({
  id: Schema.Types.ObjectId , 
  nome: String,
  nacionalidade: String,
}, { versionKey: false });

const autor = mongoose.model("autores", autorSchema); 

export { autor, autorSchema } 