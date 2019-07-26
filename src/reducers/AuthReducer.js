import { CHANGE_USER_EMAIL, CHANGE_USER_PASSWORD, LOGIN_USER } from '../actions/types';

const initialState = {
    email: "",
    password: "",
    token: ""
};

export default (state = initialState, action) => {
    console.log(action)
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
        case LOGIN_USER:
            return{
                ...state,
                token: action.payload
            };
        default:
            return state;
    }
}