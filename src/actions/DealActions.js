import {
    GET_DEALS,
    GET_DEAL_BY_ID,
    GET_MORE_DEALS,
    CHANGE_FILTER_TYPE,
    SET_DEAL_LOADING
} from './types';

export const getDeals = filterType => {
    return dispatch => {
        const url = "https://cnycserver.herokuapp.com/items";

        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                dispatch({
                    type: GET_DEALS,
                    payload: data
                });
                dispatch(changeFilterType(filterType));
            })
            .catch((err) => {
                console.log('There was a problem with your fetch request' + err.message);
            });
    }
}

export const getDealById = dealID => {
    return dispatch => {
        dispatch(setDealLoading());

        const url = "https://cnycserver.herokuapp.com/items/" + dealID;
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                dispatch({
                    type: GET_DEAL_BY_ID,
                    payload: data
                });
            })
            .catch((err) => {
                console.log('There was a problem with your fetch request' + err.message);
            });
    }
}

export const getDealsByName = (dealName, filterType) => {
    return dispatch => {
        const url = "https://cnycserver.herokuapp.com/items/searchItemByName?name=" + dealName;

        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                dispatch({
                    type: GET_DEALS,
                    payload: data
                });
                dispatch(changeFilterType(filterType));
            })
            .catch((err) => {
                console.log('There was a problem with your fetch request' + err.message);
            });
    }
}
export const getMoreDeals = (dealName, currentPage, filterType) => {
    return dispatch => {
        let url = "https://cnycserver.herokuapp.com/items?page=" + currentPage;

        if(filterType === 'byName'){ 
            url = `https://cnycserver.herokuapp.com/items/searchItemByName?name=${dealName}&page=${currentPage}`;
         }
        
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
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

const changeFilterType = filterType => {
    return{
        type: CHANGE_FILTER_TYPE,
        payload: filterType
    }
}

const setDealLoading = () => {
    return{
        type: SET_DEAL_LOADING
    }
}