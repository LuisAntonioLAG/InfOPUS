import * as api from '../api';

//Action Creators

export const getContatos = () => async (dispatch) => {
    try {
        const { data } = await api.fetchContatos();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }


    
}