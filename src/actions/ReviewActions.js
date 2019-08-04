import { getDealById } from './DealActions'

import {
    CHANGE_REVIEW_TEXT,
    CHANGE_REVIEW_RATING,
    OPEN_ADDREVIEW_MODAL,
    CLOSE_ADDREVIEW_MODAL,
    SET_REVIEW_LOADING,
    REMOVE_REVIEW_LOADING
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

export const addReview = (reviewData, dealID) => {
    return dispatch => {
        dispatch(setReviewLoading());
        let url = `https://cnycserver.herokuapp.com/items/${dealID}/reviews`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              text: reviewData.text,
              rating: reviewData.rating
            }),
            headers: {
              'Authorization': reviewData.token,
              'Content-Type': 'application/json'
            }
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            if(data.msg){
                dispatch(getDealById(dealID));
                dispatch(closeAddReviewModal());
            }
            else{
                console.log(err);
            }
            dispatch(removeReviewLoading());
            
        })
        .catch((err) => {
            console.log(err);
        });
    }
}

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

const setReviewLoading = () => {
    return{
        type: SET_REVIEW_LOADING
    }
}

const removeReviewLoading = () => {
    return{
        type: REMOVE_REVIEW_LOADING
    }
}