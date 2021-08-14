import express from 'express';

import { getCartoes, createCartao, updateCartao } from '../controllers/cartao.js'
import authMid from '../middleware/auth.js';

const router = express.Router();

router.get('/', authMid, getCartoes);
router.post('/', authMid, createCartao);
router.patch('/:id', authMid, updateCartao);

export default router;
