import express from 'express';

import { getContatos, createContato } from '../controllers/contatos.js';

const router = express.Router();

router.get('/', getContatos);
router.post('/', createContato);

export default router