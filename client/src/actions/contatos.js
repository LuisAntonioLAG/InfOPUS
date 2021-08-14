import { FETCH_CONTATOS, CREATE_CONTATO, UPDATE_CONTATO, DELETE_CONTATO} from '../constants/actionTypes';

import * as api from '../api/index.js';


//ACTION CREATORS

export const getContatos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchContatos();

    dispatch({ type: FETCH_CONTATOS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createContato = (post) => async (dispatch) => {
  try {
    const { data } = await api.createContato(post);

    dispatch({ type: CREATE_CONTATO, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateContato = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateContato(id, post);

    dispatch({type: UPDATE_CONTATO, payload: data})
  } catch(error) {
    console.log(error);
  };
};

export const deleteContato = (id) => async (dispatch) => {
  try {
    await api.deleteContato(id);

    dispatch({ type: DELETE_CONTATO, payload: id});
  } catch (error) {
    console.log(error);
    
  }
};