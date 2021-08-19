import { combineReducers } from 'redux';

import contatos from './contatos.js';
import auth from './auth.js';
import cartoes from './cartoes.js'
import notificacoes from './notificacoes.js'

export default combineReducers({ contatos, auth, cartoes, notificacoes });
