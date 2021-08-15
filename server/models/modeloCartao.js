import mongoose from 'mongoose'

const cartaoSchema = mongoose.Schema({
    titulo: String,
    descricao: String,
    zip: String,
    pdf: String, 
    word: String,
    excel: String, 
    ppt: String, 
    imagem: String,
    video: String, 
    audio: String, 
    cad: String, 
    revit: String, 
    sketch: String, 
    acess: String, 
    pagina: String,
}, {timestamps: {createdAt:'dataCriacao', updatedAt: 'dataAtualizacao'}})

var ModeloCartao = mongoose.model('ModeloCartao', cartaoSchema);

export default ModeloCartao;