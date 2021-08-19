import { AUTH, AUTHERROR, SIGN, LEMBRAR } from '../constants/actionTypes';
import * as api from '../api/index.js';

import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction,} from './notificacoes.js'


//ACTION CREATORS

export const logar = (infoUser, history, devoLembrar) => async (dispatch) => {
    try {
        const { data } = await api.logar(infoUser);
        const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));

        dispatch({ type: AUTH, data })

        if(devoLembrar === true) {
            const email = infoUser.email
            const data  = {email}
            dispatch({type: LEMBRAR, data})
        }
        else {
            localStorage.clear()
        }

        {/* MANDAR A NOTIFICAÇÃO  */}
        enqueueSnackbar({
            message: 'Login realizado com sucesso',
            options: {
                variant: 'success',
                autoHideDuration: 1500,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                },
            },
        });

        history.push('/')
        
    } catch (error) {

        const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
        enqueueSnackbar({
            message: error.response.data.message,
            options: {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
            },
        });
    }

};

export const cadastrar = (infoUser) => async (dispatch) => {
    try {
        const { data } = await api.cadastrar(infoUser);

        dispatch({ type: SIGN, data })   
        
        const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
        enqueueSnackbar({
            message: 'Usuário cadastrado!',
            options: {
                variant: 'success',
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                },
            },
        });


    } catch (error) {
        
        const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
        enqueueSnackbar({
            message: error.response.data.message,
            options: {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                },
            },
        });
    }
};