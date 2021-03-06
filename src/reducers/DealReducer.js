import {
    GET_DEAL_BY_ID,
    OPEN_ADDREVIEW_MODAL,
    CLOSE_ADDREVIEW_MODAL,
    SET_DEAL_LOADING
} from '../actions/types';

const initialState = {
    deal: "",
    loading: true,
    showAddReviewModal: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_DEAL_BY_ID:
            return{
                ...state,
                deal: action.payload.item,
                loading: false
            }
        case OPEN_ADDREVIEW_MODAL:
            return{
                ...state,
                showAddReviewModal: true
            }
        case CLOSE_ADDREVIEW_MODAL:
            return{
                ...state,
                showAddReviewModal: false
            }
        case SET_DEAL_LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}