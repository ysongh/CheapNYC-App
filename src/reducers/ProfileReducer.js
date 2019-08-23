import {
    GET_USER,
    GET_USER_LISTOFDEALS
} from '../actions/types';

const initialState = {
    userData: {},
    dealsList: []
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_USER:
            return{
                ...state,
                userData: action.payload
            };
        case GET_USER_LISTOFDEALS:
            return{
                ...state,
                dealsList: action.payload
            }
        default:
            return state;
    }
}