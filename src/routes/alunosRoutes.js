import express from 'express' // 9 
import AlunoControllers from '../controllers/alunosControllers.js' // 9

const router = express.Router(); //Criar um objeto roteador //9

router //9 
    .get('/alunos', AlunoControllers.listaAlunos)
    .get('/alunos/:id',AlunoControllers.listarAlunosPorId)
    .post("/alunos", AlunoControllers.cadastraAluno)
    .put('/alunos/:id', AlunoControllers.atualizarAluno)
    .delete('/alunos/:id', AlunoControllers.excluirAluno)


    export default router; // 9