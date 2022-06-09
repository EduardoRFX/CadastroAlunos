import express from 'express' // 2 
import db from './config/dbConnect.js' // 4 
import routes from './routes/index.js' // 8


db.on('error', console.log.bind(console, 'Erro de conexão')) // 4
db.once('open', () =>{
        console.log('Conecxão com o banco feita com sucesso') // 4
})

const app = express(); // 2

app.use(express.json()); //2

routes(app); // 8


export default app; // 2