import {
    CHANGE_DEALINFO,
    DEALFORM_ERROR
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
        default:
            return state;
    }
}