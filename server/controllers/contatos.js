import ContatoInfo from '../models/contatoInfo.js'

export const getContatos = async (req, res) => {
   try {
       const contatoInfo = await ContatoInfo.find();

       res.status(200).json(contatoInfo);

   } catch (error) {
       res.status(404).json({ message: error.message })   
    }
}  

export const createContato = async (req,res) => {
    const contato = req.body;

    const newContato = new ContatoInfo(contato);

    try {
       await newContato.save();
       res.status(201).json(newContato)
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}