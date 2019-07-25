import { CHANGE_USER_EMAIL, CHANGE_USER_PASSWORD } from '../actions/types';

const initialState = {
    email: "",
    password: ""
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
        default:
            return state;
    }
}