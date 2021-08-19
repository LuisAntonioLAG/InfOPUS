import { FETCH_CARTOES, CREATE_CARTAO, UPDATE_CARTAO, DELETE_CARTAO} from '../constants/actionTypes';
import * as api from '../api/index.js';

import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction,} from './notificacoes.js'


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

      /* FECHAR NOTIFICAÇÕES ANTIGAS */
      const closeSnackbar = (...args) => dispatch(closeSnackbarAction(...args));
      closeSnackbar();
    
        /* MANDAR A NOTIFICAÇÃO  */
        const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
        enqueueSnackbar({
            message: 'Card criado.',
            options: {
                variant: 'success',
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                },
            },
        });
        
  } catch (error) {
    console.log(error);

            /* MANDAR A NOTIFICAÇÃO  */
            const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
            enqueueSnackbar({
                message: 'Ocorreu um erro. Não foi possível criar o card.',
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

export const updateCartao = (id, cartao) => async (dispatch) => {
  try {
    const { data } = await api.updateCartao(id, cartao);

    dispatch({type: UPDATE_CARTAO, payload: data})

     /* FECHAR NOTIFICAÇÕES ANTIGAS */
     const closeSnackbar = (...args) => dispatch(closeSnackbarAction(...args));
     closeSnackbar();
   
       /* MANDAR A NOTIFICAÇÃO  */
       const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
       enqueueSnackbar({
           message: 'Card atualizado.',
           options: {
               variant: 'success',
               anchorOrigin: {
                   vertical: 'bottom',
                   horizontal: 'center',
               },
           },
       });


  } catch(error) {
    console.log(error);

    /* MANDAR A NOTIFICAÇÃO  */
    const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
    enqueueSnackbar({
        message: 'Ocorreu um erro. Não foi possível atualizar o card.',
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

export const deleteCartao = (id) => async (dispatch) => {
  try {
    await api.deleteCartao(id);

    dispatch({ type: DELETE_CARTAO, payload: id});

         /* FECHAR NOTIFICAÇÕES ANTIGAS */
         const closeSnackbar = (...args) => dispatch(closeSnackbarAction(...args));
         closeSnackbar();
       
           /* MANDAR A NOTIFICAÇÃO  */
           const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
           enqueueSnackbar({
               message: 'Card deletado.',
               options: {
                   variant: 'success',
                   anchorOrigin: {
                       vertical: 'bottom',
                       horizontal: 'center',
                   },
               },
           });
           
  } catch (error) {

    console.log(error);

        /* MANDAR A NOTIFICAÇÃO  */
        const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
        enqueueSnackbar({
            message: 'Ocorreu um erro. Não foi possível excluir o card.',
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