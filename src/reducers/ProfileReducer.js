import {
    GET_USER,
    GET_USER_LISTOFDEALS,
    PROFILE_USER_LOADING,
    PROFILE_USER_REMOVELOADING,
    PROFILE_DEALS_LOADING,
    PROFILE_ERROR,
    IMAGE_LOADING,
    IMAGE_REMOVELOADING
} from '../actions/types';

const initialState = {
    userData: {},
    dealsList: [],
    userLoading: true,
    dealsLoading: true,
    imageLoading: false,
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
        case PROFILE_USER_REMOVELOADING:
            return{
                ...state,
                userLoading: false
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
        case IMAGE_LOADING:
            return{
                ...state,
                imageLoading: true
            }
        case IMAGE_REMOVELOADING:
            return{
                ...state,
                imageLoading: false
            }
        default:
            return state;
    }
}