import { AUTH, AUTHERROR, LEMBRAR } from '../constants/actionTypes';

import * as api from '../api/index.js';

//ACTION CREATORS

export const logar = (infoUser, history, devoLembrar) => async (dispatch) => {
    try {
        const { data } = await api.logar(infoUser);

        dispatch({ type: AUTH, data })

        if(devoLembrar === true) {
            const email = infoUser.email
            const data  = {email}
            dispatch({type: LEMBRAR, data})
        }
        else {
            localStorage.clear()
        }

        history.push('/')
    } catch (error) {

        dispatch({ type: AUTHERROR, payload: error.response.data.message})
    }
};

export const cadastrar = (infoUser, history) => async (dispatch) => {
    try {
        const { data } = await api.cadastrar(infoUser);

        dispatch({ type: AUTH, data })


        history.push('/')
    } catch (error) {
        
        dispatch({ type: AUTHERROR, payload: error.response.data.message})
    }
};