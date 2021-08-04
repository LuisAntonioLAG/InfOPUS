import { AUTH } from '../constants/actionTypes';

import * as api from '../api/index.js';

//ACTION CREATORS

export const logar = (infoUser, history) => async (dispatch) => {
    try {
        const { data } = await api.logar(infoUser);
        console.log(data)

        dispatch({ type: AUTH, data })

        history.push('/')
    } catch (error) {
        console.log(error);
    }
};

export const cadastrar = (infoUser, history) => async (dispatch) => {
    try {
        const { data } = await api.cadastrar(infoUser);

        dispatch({ type: AUTH, data })


        history.push('/')
    } catch (error) {
        console.log(error);
    }
};