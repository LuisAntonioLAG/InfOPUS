import express from 'express';
import authMid from '../middleware/auth.js';

import { logar, cadastrar, mudarTema } from '../controllers/usuarios.js';

const router = express.Router();

router.post('/logar', logar);
router.post('/cadastrar', authMid, cadastrar)
router.patch('/:id', authMid, mudarTema)

export default router;