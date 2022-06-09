import app from './src/app.js' // 5

const port = process.env.PORT || 80; // 1


app.listen(port, () =>{
    console.log(`Servidor escutando em http:localhost:${port}`) // 5
})