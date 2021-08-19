import { AUTH, SIGN, LOGOUT, LEMBRAR } from "../constants/actionTypes";

const authReducer = (state = { authData: null}, action) => {

    switch (action.type) {
        case AUTH:
            sessionStorage.setItem('profile', JSON.stringify({ ...action?.data }));

            return {...state, authData: action?.Data};
            
        case SIGN:

            return {...state}
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