import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    cargo: String,
    nome: String,
    empresa: String,
    numero: String,
    mensagem: String,
    foto: String,
    data: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;