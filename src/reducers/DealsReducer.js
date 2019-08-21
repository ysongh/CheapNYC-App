import {
    GET_DEALS,
    GET_MORE_DEALS,
    CHANGE_FILTER_TYPE
} from '../actions/types';

const initialState = {
    deals: [],
    filterType: "None",
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
                totalDeals: Math.floor(action.payload.totalDeals / 12) + 1,
                currentPage: 2
            };
        case GET_MORE_DEALS:
            return{
                ...state,
                deals: state.deals.concat(action.payload.items),
                currentPage: state.currentPage += 1
            }
        case CHANGE_FILTER_TYPE:
            return{
                ...state,
                filterType: action.payload
            }
        default:
            return state;
    }
}