import express from 'express';

import { getContatos, createContato, updateContato, deleteContato } from '../controllers/contatos.js';
import authMid from '../middleware/auth.js';

const router = express.Router();

router.get('/', authMid, getContatos);
router.post('/', authMid, createContato);
router.patch('/:id', authMid, updateContato);
router.delete('/:id', authMid, deleteContato);

export default router;