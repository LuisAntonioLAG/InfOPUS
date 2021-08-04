import mongoose from 'mongoose';

const contatoSchema = mongoose.Schema({
    cargo: String,
    nome: String,
    empresa: String,
    numero: String,
    mensagem: String,
    foto: String,
}, {timestamps: {createdAt:'dataCriacao', updatedAt: 'dataAtualizacao'}})

var ModeloContato = mongoose.model('ModeloContato', contatoSchema);

export default ModeloContato;