import express from 'express';

import { logar, cadastrar } from '../controllers/usuarios.js';

const router = express.Router();

router.post('/logar', logar);
router.post('/cadastrar', cadastrar)

export default router;