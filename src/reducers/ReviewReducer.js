import {
    CHANGE_REVIEW_TEXT,
    CHANGE_REVIEW_RATING,
    SET_REVIEW_LOADING,
    REMOVE_REVIEW_LOADING,
    REVIEW_ERROR,
    CLEAR_REVIEW_INPUTS
} from '../actions/types';

const initialState = {
    text: "",
    rating: "",
    loading: false,
    error: ""
}

export default (state = initialState, action) => {
    switch(action.type){
        case CHANGE_REVIEW_TEXT:
            return{
                ...state,
                text: action.payload
            };
        case CHANGE_REVIEW_RATING:
            return{
                ...state,
                rating: action.payload,
            };
        case SET_REVIEW_LOADING:
            return{
                ...state,
                loading: true
            }
        case REMOVE_REVIEW_LOADING:
            return{
                ...state,
                loading: false
            }
        case REVIEW_ERROR:
            return{
                ...state,
                error: action.payload
            }
        case CLEAR_REVIEW_INPUTS:
            return{
                ...state,
                text: "",
                rating: "",
                error: ""
            }
        default:
            return state;
    }
}