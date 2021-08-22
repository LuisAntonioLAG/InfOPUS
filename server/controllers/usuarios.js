import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import ModeloUsuario from '../models/modeloUsuario.js';

const secret = 'test';

export const logar = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuarioExistente = await ModeloUsuario.findOne({ email });

        if (!usuarioExistente) return res.status(404).send({ message: "E-mail não cadastrado" });

        const isSenhaCorreta = await bcrypt.compare(senha, usuarioExistente.senha);
    
        if (!isSenhaCorreta) return res.status(400).send({ message: "Senha incorreta" });
    
        const token = jwt.sign({ email: usuarioExistente.email, id: usuarioExistente._id }, secret);
    
        res.status(200).json({ result: usuarioExistente, token });

    } catch (error) {
        res.status(500).json({ message: "Algo deu errado..." });
    }
};


export const cadastrar = async (req, res) => {
    const { email, senha, nome, confirmSenha, diretoria, cargo, foto } = req.body;

    try {
        const usuarioExistente = await ModeloUsuario.findOne({ email });

        if (usuarioExistente) return res.status(400).send({ message: "E-mail já cadastrado" });

        if (senha !== confirmSenha) return res.status(400).send({ message: "As senhas devem ser iguais" });

        const hashedSenha = await bcrypt.hash(senha, 12);

        const result = await ModeloUsuario.create( { email, senha: hashedSenha, nome, diretoria, cargo, foto } );

        const token = jwt.sign({ email: result, id: result._id }, secret);
        
        res.status(200).json({ result: result, token });

    } catch (error) {
        res.status(500).send({ message: "Algo deu errado..." });
    }
};

export const updateUsuario = async (req, res) => {

    const { id: _id } = req.params;
    const usuario = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) res.status(404).send('Nenhum usuário com esse id');

    if (usuario.senha !== usuario.confirmSenha) return res.status(400).send({ message: "As senhas devem ser iguais" });


    const hashedSenha = await bcrypt.hash(usuario.senha, 12);

    const updatedUsuario = usuario.senha !== '' ? (await ModeloUsuario.findByIdAndUpdate(_id, {...usuario, 'senha': hashedSenha }, {new: true} )) : (await ModeloUsuario.findByIdAndUpdate(_id, {'foto': usuario.foto }, {new: true} ))

    const token = jwt.sign({ email: updatedUsuario.email , id: updatedUsuario._id }, secret);

    res.json({result: updatedUsuario, token});
        
}

export const mudarTema = async (req, res) => {
    const { id: _id  } = req.params
    const  tema  = req.body;
    try {

        if(!mongoose.Types.ObjectId.isValid(_id)) res.status(404).send('Nenhum contato com esse id');

        const updatedTheme = await ModeloUsuario.findByIdAndUpdate(_id, {'tema': tema.nome }, {new: true} );

        const token = jwt.sign({ email: updatedTheme.email , id: updatedTheme._id }, secret);
    
        res.json({ result: updatedTheme, token });

        
    } catch (error) {
        res.status(500).send({ message: "Algo deu errado..." });
        console.log(error)
    }

   

}