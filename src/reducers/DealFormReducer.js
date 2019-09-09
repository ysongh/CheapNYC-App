import {
    CHANGE_DEALINFO
} from '../actions/types';

const initialState = {
    name: "",
    category: "",
    price: "",
    location: "",
    description: "",
    company: "",
    duration: ""
}

export default (state = initialState, action) => {
    switch(action.type){
        case CHANGE_DEALINFO:
            return{
                ...state,
                [action.payload.prop]: action.payload.value
            }
        default:
            return state;
    }
}