import { AUTH, SIGN, LEMBRAR, UPDATE_USUARIO } from '../constants/actionTypes';
import * as api from '../api/index.js';

import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction,} from './notificacoes.js'


//ACTION CREATORS

export const logar = (infoUser, history, devoLembrar, setLogando) => async (dispatch) => {
    try {

        setLogando(true)
        
        const { data } = await api.logar(infoUser);

        dispatch({ type: AUTH, data })

        setLogando(false)

        if(devoLembrar === true) {
            const email = infoUser.email
            const data  = {email}
            dispatch({type: LEMBRAR, data})
        }
        else {
            localStorage.clear()
        }

        /* FECHAR NOTIFICAÇÕES ANTIGAS */
        const closeSnackbar = (...args) => dispatch(closeSnackbarAction(...args));
        closeSnackbar();


        /* MANDAR A NOTIFICAÇÃO  */
        const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
        enqueueSnackbar({
            message: 'Login realizado com sucesso.',
            options: {
                variant: 'success',
                autoHideDuration: 1000,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                },
            },
        });

        function avancar() {history.push('/')} 
        setTimeout(avancar, 500)

        
    } catch (error) {

        setLogando(false)

        const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
        enqueueSnackbar({
            message: error.response.data.message,
            options: {
                variant: 'error',
                autoHideDuration: 5000,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
            },
        });
    }

};

export const cadastrar = (infoUser, setInfoUser) => async (dispatch) => {
    try {
        const { data } = await api.cadastrar(infoUser);

        dispatch({ type: SIGN, data })   

        /* NOTIFICAÇÕES */

        const closeSnackbar = (...args) => dispatch(closeSnackbarAction(...args));
        closeSnackbar();
        
        const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
        enqueueSnackbar({
            message: 'Usuário cadastrado.',
            options: {
                variant: 'success',
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                },
            },
        });

        setInfoUser({...infoUser, nome: '', email: '', senha: '', confirmSenha: '', foto: ''})

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


export const updateUsuario = (id, usuario, setInfoUser) => async (dispatch) => {
    try {
        
        const { data } = await api.updateUsuario(id, usuario);

        setInfoUser({...usuario, senha:'', confirmSenha: ''})

        dispatch({type: UPDATE_USUARIO, data})

       /* FECHAR NOTIFICAÇÕES ANTIGAS */
     const closeSnackbar = (...args) => dispatch(closeSnackbarAction(...args));
     closeSnackbar();
   
       /* MANDAR A NOTIFICAÇÃO  */
       const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
       enqueueSnackbar({
           message: 'Perfil atualizado.',
           options: {
               variant: 'success',
               anchorOrigin: {
                   vertical: 'bottom',
                   horizontal: 'center',
               },
           },
       });

       window.location.reload(false);


  } catch(error) {
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
  };
};