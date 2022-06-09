import alunos from '../models/alunos.js' // 7

class AlunoControllers { // 7
    
    static listaAlunos = (req, res) =>{
        alunos.find((err, alunos) =>{
            res.status(200).json(alunos)
        })
    }

    static listarAlunosPorId = (req, res) => {
        const id = req.params.id;

        alunos.findById(id,(err, alunos) =>{
            if(err){
                res.status(400).send({message: `${err.message} - Id do aluno não encontrado`})
            } else {
                res.status(200).send(alunos);
            }
        })
    }

    static cadastraAluno = (req, res) =>{
        let aluno = new alunos(req.body);

        aluno.save((err) =>{ // .save() - salvar o documento no banco de dados. Usando esta função, novos documentos podem ser adicionados ao banco de dados.
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastra aluno.`})
            } else {
                res.status(201).send(aluno.toJSON()) // toJSON() - retorna ao elemento associado um elemento em formato json(string)
            }
        })
    }

    static atualizarAluno = (req, res) =>{
        const id = req.params.id;

        alunos.findByIdAndUpdate(id, {$set: req.body}, (err) => { //findByIdAndUpdate -> proucura por um id e atualiza, esse metodo, nesse caso, tem 3 paramentros, o primeiro se referencia ao id proucurado, o segundo ao elemento que substituira o antigo, e o terceiro a função callback que executara tal ato.
            if(!err){
                res.status(200).send({message: 'Aluno atualizado'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirAluno = (req, res) =>{
        const id = req.params.id;

        alunos.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({message: 'Aluno removido'})
            } else {
                res.status(500).send({message: `${err.message} - Id para EXCLUSÃO não encontrado`})
            }
        })
    }

} // 7


export default AlunoControllers; // 7