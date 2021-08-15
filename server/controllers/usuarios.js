import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import ModeloUsuario from '../models/modeloUsuario.js';

const secret = 'test';

export const logar = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuarioExistente = await ModeloUsuario.findOne({ email });

        if (!usuarioExistente) return res.status(404).json({ message: "E-mail não cadastrado" });

        const isSenhaCorreta = await bcrypt.compare(senha, usuarioExistente.senha);
    
        if (!isSenhaCorreta) return res.status(400).json({ message: "Senha incorreta" });
    
        const token = jwt.sign({ email: usuarioExistente.email, id: usuarioExistente._id }, secret);
    
        res.status(200).json({ result: usuarioExistente, token });

    } catch (error) {
        res.status(500).json({ message: "Algo deu errado..." });
    }
};


export const cadastrar = async (req, res) => {
    const { email, senha, nome, confirmSenha, foto } = req.body;

    try {
        const usuarioExistente = await ModeloUsuario.findOne({ email });

        if (usuarioExistente) return res.status(400).json({ message: "E-mail já cadastrado" });

        if (senha !== confirmSenha) return res.status(400).json({ message: "As senhas devem ser iguais" });

        const hashedSenha = await bcrypt.hash(senha, 12);

        const result = await ModeloUsuario.create( { email, senha: hashedSenha, nome, foto } );

        const token = jwt.sign({ email: result, id: result._id }, secret);

        res.status(200).json({ result: result, token });

    } catch (error) {
        res.status(500).json({ message: "Algo deu errado..." });
    }
}