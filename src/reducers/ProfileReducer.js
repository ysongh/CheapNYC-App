import {
    GET_USER,
    GET_USER_LISTOFDEALS,
    PROFILE_USER_LOADING,
    PROFILE_DEALS_LOADING,
    PROFILE_ERROR
} from '../actions/types';

const initialState = {
    userData: {},
    dealsList: [],
    userLoading: true,
    dealsLoading: true,
    profileError: ""
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_USER:
            return{
                ...state,
                userData: action.payload,
                userLoading: false,
                profileError: ""
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
        case PROFILE_ERROR:
            return{
                ...state,
                profileError: action.payload,
                userLoading: false,
                dealsLoading: false
            }
        default:
            return state;
    }
}