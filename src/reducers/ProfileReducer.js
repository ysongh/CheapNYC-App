import {
    GET_USER
} from '../actions/types';

const initialState = {
    userData: {}
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_USER:
            return{
                ...state,
                userData: action.payload
            };
        default:
            return state;
    }
}