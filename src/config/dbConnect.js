import mongoose from 'mongoose' // 3

mongoose.connect("mongodb+srv://node:123@node.ghaif.mongodb.net/Cadastro-Alunos") // 3

let db = mongoose.connection // 3 

export default db; // 3