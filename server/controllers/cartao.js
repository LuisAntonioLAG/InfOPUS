import express from 'express';
import mongoose from 'mongoose';

import ModeloCartao from '../models/modeloCartao.js';

const router = express.Router();

export const getCartoes = async (req, res) => {
    try {
        const modelosCartao = await ModeloCartao.find();

        res.status(200).json(modelosCartao);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createCartao = async (req, res) => {
    const { titulo, descricao, zip, pdf, word, excel, ppt, imagem, video, audio, cad, revit, sketch, acess, pagina } = req.body;

    const newModeloCartao = new ModeloCartao({ titulo, descricao, zip, pdf, word, excel, ppt, imagem, video, audio, cad, revit, sketch, acess, pagina })

    try {
        await newModeloCartao.save()

        res.status(201).json(newModeloCartao);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const updateCartao = async (req, res) => {
    const { id: _id } = req.params;
    const cartao = req.body;
 
    if(!mongoose.Types.ObjectId.isValid(_id)) res.status(404).send('Nenhum cartão com esse id');

    const updatedCartao = await ModeloCartao.findByIdAndUpdate(_id, cartao, {new: true} )

    res.json(updatedCartao);
}

export const deleteCartao = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('Nenhum cartao com esse id');

    await ModeloCartao.findByIdAndRemove(id);

    res.json({ message: 'Cartão deletado com sucesso' });
}



export default router;