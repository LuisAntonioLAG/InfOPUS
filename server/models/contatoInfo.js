import mongoose from "mongoose";

const contatoSchema = mongoose.Schema({
    empresa: String,
    cargo: String,
    nome: String,
    number: String,
    foto: String,
    data: {
        type: Date,
        dafault: new Date()
    }
}); 

const ContatoInfo = mongoose.model('ContatoInfo', contatoSchema);

export default ContatoInfo;