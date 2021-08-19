import { AUTH, AUTHERROR, SIGN, LOGOUT, LEMBRAR } from "../constants/actionTypes";

const authReducer = (state = { authData: null, errorMessage: null}, action) => {

    switch (action.type) {
        case AUTH:
            sessionStorage.setItem('profile', JSON.stringify({ ...action?.data }));

            return {...state, authData: action?.Data, errorMessage: null};
        case AUTHERROR:


            
            return {...state, errorMessage: action?.payload}
        case SIGN:

            return {...state, errorMessage: null}
        case LOGOUT:
            sessionStorage.clear();

            return {...state, authData: null}
        case LEMBRAR:
            localStorage.setItem('lembrado', JSON.stringify({ ...action?.data }));

            return state
        default:
            return state
    }
}

export default authReducer;