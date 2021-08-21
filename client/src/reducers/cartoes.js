import { FETCH_CARTOES, CREATE_CARTAO, UPDATE_CARTAO, DELETE_CARTAO} from '../constants/actionTypes';


const cardReducer = (cartoes = {cards: [], loading: true}, action) => {
  switch (action.type) {
    case FETCH_CARTOES:
      return {...cartoes, cards: action.payload, loading: false};
    case CREATE_CARTAO:
      return {...cartoes, cards: [...cartoes.cards, action.payload]};
    case UPDATE_CARTAO:
      return {...cartoes, cards: cartoes.cards.map((cartao) => cartao._id === action.payload._id ? action.payload : cartao)};
    case DELETE_CARTAO:
      return {...cartoes, cards: cartoes.cards.filter((cartao) => cartao._id !== action.payload)};
    default:
    return cartoes;
    }
};

export default cardReducer