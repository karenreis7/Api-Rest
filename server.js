// criar do server 
import "dotenv/config"; 
import app from "./scr/app.js"; 



const PORT = 3001; 

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/plain"}); 
//     res.end("curso de node.js"); 
// }); 

app.listen(PORT, () => {
    console.log("tentando conectar...");
})