import { FETCH_CARTOES, CREATE_CARTAO, UPDATE_CARTAO} from '../constants/actionTypes';


export default (cartoes = [], action) => {
  switch (action.type) {
    case FETCH_CARTOES:
      return action.payload;
    case CREATE_CARTAO:
      return [...cartoes, action.payload];
    case UPDATE_CARTAO:
      return cartoes.map((cartao) => cartao._id === action.payload._id ? action.payload : cartao);
    default:
    return cartoes;
    }
};
