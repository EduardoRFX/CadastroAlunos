import mongoose from "mongoose"; // 6

const alunoSchema = new mongoose.Schema(
    {
        
        id: {type: String},
        Nome: {type: String, required: true},
        idade: {type: Number, required: true},
        status: {type: String}

    },
    {
        versionKey: false
    }
) // 6

const alunos = mongoose.model('alunos', alunoSchema); // 6 - mongoose.model cria uma coleção para o banco de dados, sendo o primeiro parametro o nome, e o segundo o esquema como deve ser

export default alunos; // 6