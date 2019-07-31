import {
    GET_DEALS,
    GET_MORE_DEALS
} from './types';

export const getDeals = () => {
    return dispatch => {
        let url = `https://cnycserver.herokuapp.com/items`;
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                dispatch({
                    type: GET_DEALS,
                    payload: data
                });
            })
            .catch((err) => {
                console.log('There was a problem with your fetch request' + err.message);
            });
    }
}

export const getMoreDeals = currentPage => {
    return dispatch => {
        let url = "https://cnycserver.herokuapp.com/items?page=" + currentPage;
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then((data) => {
                dispatch({
                    type: GET_MORE_DEALS,
                    payload: data
                });
            })
            .catch((err) => {
                console.log('There was a problem with your fetch request' + err.message);
            });
    }
}