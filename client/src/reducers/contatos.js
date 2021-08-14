import { FETCH_CONTATOS, CREATE_CONTATO, UPDATE_CONTATO, DELETE_CONTATO } from '../constants/actionTypes';

export default (contatos = [], action) => {
  switch (action.type) {
    case FETCH_CONTATOS:
      return action.payload;
    case CREATE_CONTATO:
      return [...contatos, action.payload];
    case UPDATE_CONTATO:
      return contatos.map((contato) => contato._id === action.payload._id ? action.payload : contato);
    case DELETE_CONTATO:
      return contatos.filter((contato) => contato.id !== action.payload);
    default:
      return contatos;

  }
};

