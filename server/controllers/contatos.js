import express from 'express';
import mongoose from 'mongoose';

import ModeloContato from '../models/modeloContato.js';

const router = express.Router();

export const getContatos = async (req, res) => { 
    try {
        const modelosContato = await ModeloContato.find();

        res.status(200).json(modelosContato);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createContato = async (req, res) => {
    const { cargo, nome, foto, empresa, mensagem, numero} = req.body;

    const newModeloContato = new ModeloContato({ cargo, nome, foto, empresa, mensagem, numero })

    try {
        await newModeloContato.save();

        res.status(201).json(newModeloContato );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateContato = async (req, res) => {
    const { id: _id } = req.params;
    const contato = req.body;
 
    if(!mongoose.Types.ObjectId.isValid(_id)) res.status(404).send('Nenhum contato com esse id');

    const updatedContato = await ModeloContato.findByIdAndUpdate(_id, contato, {new: true} )

    res.json(updatedContato);

}


export const deleteContato = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('Nenhum contato com esse id');

    await ModeloContato.findByIdAndRemove(id);

    res.json({ message: 'Contato deletado com sucesso' });
}




export default router;


