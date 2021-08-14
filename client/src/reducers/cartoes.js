import { FETCH_ALL, CREATE, UPDATE} from '../constants/actionTypes';

export default (cartoes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...cartoes, action.payload];
    case UPDATE:
      return cartoes.map((cartao) => cartao._id === action.payload._id ? action.payload : cartao);
    default:
    return cartoes;
    }
};
