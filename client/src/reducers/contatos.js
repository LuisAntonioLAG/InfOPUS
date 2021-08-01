import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (contatos = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...contatos, action.payload];
    case UPDATE:
      return contatos.map((contato) => contato._id === action.payload._id ? action.payload : contato);
    case DELETE:
      return contatos.filter((contato) => contato.id !== action.payload);
    default:
      return contatos;

  }
};

