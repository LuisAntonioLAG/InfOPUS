import { FETCH_ALL, CREATE, UPDATE} from '../constants/actionTypes';

import * as api from '../api/index.js';


//ACTION CREATORS

export const getCartoes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCartoes();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCartao = (cartao) => async (dispatch) => {
  try {
    const { data } = await api.createCartao(cartao);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCartao = (id, cartao) => async (dispatch) => {
  try {
    const { data } = await api.updateCartao(id, cartao);

    dispatch({type: UPDATE, payload: data})
  } catch(error) {
    console.log(error);
  };
};