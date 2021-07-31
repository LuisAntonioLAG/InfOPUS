import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { cargo, nome, foto, empresa, mensagem, numero } = req.body;

    const newPostMessage = new PostMessage({ cargo, nome, foto, empresa, mensagem, numero })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
 
    if(!mongoose.Types.ObjectId.isValid(_id)) res.status(404).send('Nenhum contato com esse id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true} )

    res.json(updatedPost);

}


export const deletePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('Nenhum contato com esse id');

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'Contato deletado com sucesso' });
}




export default router;