import {
    CHANGE_REVIEW_TEXT,
    CHANGE_REVIEW_RATING,
} from '../actions/types';

const initialState = {
    text: "",
    rating: ""
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
                rating: action.payload
            };
        default:
            return state;
    }
}