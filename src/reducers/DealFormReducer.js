import {
    CHANGE_DEALINFO,
    DEALFORM_ERROR,
    CLEAR_DEALFORM_INPUTS,
    SET_DEALFORM_LOADING
} from '../actions/types';

const initialState = {
    name: "",
    category: "",
    price: "",
    location: "",
    city: "",
    description: "",
    company: "",
    duration: "",
    error: "",
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case CHANGE_DEALINFO:
            return{
                ...state,
                [action.payload.prop]: action.payload.value
            };
        case DEALFORM_ERROR:
            return{
                ...state,
                error: action.payload,
                loading: false
            };
        case CLEAR_DEALFORM_INPUTS:
            return{
                ...state,
                name: "",
                category: "",
                price: "",
                location: "",
                city: "",
                description: "",
                company: "",
                duration: "",
                error: "",
                loading: false
            }
        case SET_DEALFORM_LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}