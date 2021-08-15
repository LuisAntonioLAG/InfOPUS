import { FETCH_CARTOES, CREATE_CARTAO, UPDATE_CARTAO, DELETE_CARTAO} from '../constants/actionTypes';

import * as api from '../api/index.js';


//ACTION CREATORS

export const getCartoes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCartoes();

    dispatch({ type: FETCH_CARTOES, payload: data });

  } catch (error) {
    console.log(error.message);
  }
};

export const createCartao = (cartao) => async (dispatch) => {
  try {
    const { data } = await api.createCartao(cartao);

    dispatch({ type: CREATE_CARTAO, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCartao = (id, cartao) => async (dispatch) => {
  try {
    const { data } = await api.updateCartao(id, cartao);

    dispatch({type: UPDATE_CARTAO, payload: data})
  } catch(error) {
    console.log(error);
  };
};

export const deleteCartao = (id) => async (dispatch) => {
  try {
    await api.deleteCartao(id);

    dispatch({ type: DELETE_CARTAO, payload: id});
  } catch (error) {
    console.log(error);
    
  }
};