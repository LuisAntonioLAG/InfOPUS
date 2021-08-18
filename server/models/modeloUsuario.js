import mongoose from 'mongoose';

const usuarioSchema = mongoose.Schema({
    
    nome: String,
    diretoria: String,
    cargo: String,
    email: String,
    senha: String,
    foto: String,
    tema: {
        type: String,
        default: 'Verde'
    },
    id: {type: String},
}, {timestamps: {createdAt:'dataCriacao', updatedAt: 'dataAtualizacao'}})

var ModeloUsuario = mongoose.model('ModeloUsuario', usuarioSchema);

export default ModeloUsuario;