import {
    CHANGE_DEALINFO,
    DEALFORM_ERROR,
    CLEAR_DEALFORM_INPUTS
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
    error: ""
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
                error: action.payload
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
                error: ""
            }
        default:
            return state;
    }
}