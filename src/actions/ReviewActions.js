import {
    OPEN_ADDREVIEW_MODAL,
    CLOSE_ADDREVIEW_MODAL
} from './types';

export const openAddReviewModal = () => {
    return{
        type: OPEN_ADDREVIEW_MODAL
    }
}

export const closeAddReviewModal = () => {
    return{
        type: CLOSE_ADDREVIEW_MODAL
    }
}