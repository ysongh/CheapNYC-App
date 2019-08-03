import {
    GET_DEAL_BY_ID
} from '../actions/types';

const initialState = {
    deal: [],
    loading: true,
    showModal: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_DEAL_BY_ID:
            return{
                deal: action.payload.item,
                loading: false
            }
        default:
            return state;
    }
}