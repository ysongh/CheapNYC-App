import {
    CHANGE_REVIEW_TEXT,
    CHANGE_REVIEW_RATING,
    OPEN_ADDREVIEW_MODAL,
    CLOSE_ADDREVIEW_MODAL
} from './types';

export const changeReviewText = text => {
    return{
        type: CHANGE_REVIEW_TEXT,
        payload: text
    }
};

export const changeReviewRating = text => {
    return{
        type: CHANGE_REVIEW_RATING,
        payload: text
    }
};

export const openAddReviewModal = () => {
    return{
        type: OPEN_ADDREVIEW_MODAL
    }
};

export const closeAddReviewModal = () => {
    return{
        type: CLOSE_ADDREVIEW_MODAL
    }
}