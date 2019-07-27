import {
    CHANGE_USER_EMAIL,
    CHANGE_USER_PASSWORD,
    CHANGE_USER_CONFIRM_PASSWORD,
    CHANGE_USER_NAME,
    LOGIN_USER,
    LOGOUT_USER,
    ERROR_AUTH,
    AUTH_LOADING,
    CLEAR_INPUTS
} from '../actions/types';

const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    token: "",
    error: "",
    loading: false
};

export default (state = initialState, action) => {
    switch(action.type){
        case CHANGE_USER_EMAIL:
            return{
                ...state,
                email: action.payload
            };
        case CHANGE_USER_PASSWORD:
            return{
                ...state,
                password: action.payload
            };
        case CHANGE_USER_CONFIRM_PASSWORD:
            return{
                ...state,
                confirmPassword: action.payload
            }
        case CHANGE_USER_NAME:
            return{
                ...state,
                name: action.payload
            }
        case LOGIN_USER:
            return{
                ...state,
                token: action.payload,
                loading: false
            };
        case LOGOUT_USER:
            return{
                ...state,
                token: ""
            };
        case ERROR_AUTH:
            return{
                ...state,
                error: action.payload,
                loading: false
            }
        case AUTH_LOADING:
            return{
                ...state,
                loading: true
            }
        case CLEAR_INPUTS:
            return{
                ...state,
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                error: "",
            }
        default:
            return state;
    }
}