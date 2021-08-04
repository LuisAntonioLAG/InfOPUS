import mongoose from 'mongoose';

const usuarioSchema = mongoose.Schema({
    
    nome: String,
    email: String,
    senha: String,
    id: {type: String},
}, {timestamps: {createdAt:'dataCriacao', updatedAt: 'dataAtualizacao'}})

var ModeloUsuario = mongoose.model('ModeloUsuario', usuarioSchema);

export default ModeloUsuario;