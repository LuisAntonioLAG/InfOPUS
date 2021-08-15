import express from 'express';

import { getCartoes, createCartao, updateCartao, deleteCartao } from '../controllers/cartao.js'
import authMid from '../middleware/auth.js';

const router = express.Router();

router.get('/', authMid, getCartoes);
router.post('/', authMid, createCartao);
router.patch('/:id', authMid, updateCartao);
router.delete('/:id', authMid, deleteCartao);

export default router;
