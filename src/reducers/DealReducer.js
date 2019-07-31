import {
    GET_DEALS
} from '../actions/types';

const initialState = {
    deals: [],
    loading: true,
    totalDeals: 0,
    currentPage: 2
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_DEALS:
            return{
                ...state,
                deals: action.payload.items,
                loading: false,
                totalDeals: Math.floor(action.payload.totalDeals / 12) + 1
            };
        default:
            return state;
    }
}