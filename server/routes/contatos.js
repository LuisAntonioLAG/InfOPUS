import express from 'express';

import { getContatos, createContato, updateContato, deleteContato } from '../controllers/contatos.js';

const router = express.Router();

router.get('/', getContatos);
router.post('/', createContato);
router.patch('/:id', updateContato);
router.delete('/:id', deleteContato);

export default router;