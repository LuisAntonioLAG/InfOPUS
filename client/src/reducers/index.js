import { combineReducers } from 'redux';

import contatos from './contatos.js';
import auth from './auth.js';

export default combineReducers({ contatos, auth });
 