import {
    GET_USER,
    GET_USER_LISTOFDEALS,
    PROFILE_USER_LOADING,
    PROFILE_DEALS_LOADING
} from '../actions/types';

const initialState = {
    userData: {},
    dealsList: [],
    userLoading: true,
    dealsLoading: true,
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_USER:
            return{
                ...state,
                userData: action.payload,
                userLoading: false
            };
        case GET_USER_LISTOFDEALS:
            return{
                ...state,
                dealsList: action.payload,
                dealsLoading: false
            }
        case PROFILE_USER_LOADING:
            return{
                ...state,
                userLoading: true
            }
        case PROFILE_DEALS_LOADING:
            return{
                ...state,
                dealsLoading: true
            }
        default:
            return state;
    }
}