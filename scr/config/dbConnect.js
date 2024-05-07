import mongoose from "mongoose";

async function conectarBanco(){
    mongoose.connect(process.env.DB_CONECTION_STRING); 
    return mongoose.connection; 
}; 


export default conectarBanco; 

