import express from 'express' // 8
import alunos from './alunosRoutes.js' // 8

const routes = (app) => { // 8
    app.route('/').get((req,res) => {
        res.status(200).send({titulo: 'Sistema de cadastro de alunos'})
    })


app.use( // o .use() permite o uso das funções de Middleware, que são funções que tem acesso ao objeto de solicitação (req), o objeto de resposta (res)
    express.json(),
    alunos
)
}

export default routes // 8
