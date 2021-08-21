import express from 'express';
import authMid from '../middleware/auth.js';

import { logar, cadastrar, updateUsuario, mudarTema } from '../controllers/usuarios.js';

const router = express.Router();

router.post('/logar', logar);
router.post('/cadastrar', authMid, cadastrar)
router.patch('/:id', authMid, updateUsuario);
router.patch('/:id/tema', authMid, mudarTema)

export default router;