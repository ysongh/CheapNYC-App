import {
    GET_USER,
    GET_USER_LISTOFDEALS,
    PROFILE_USER_LOADING,
    PROFILE_DEALS_LOADING,
    PROFILE_ERROR
} from './types';

export const getUser = userId => dispatch => {
    dispatch(setProfileLoading())
    const graphqlQuery = {
        query: `
            query{
                userById(id:"${userId}"){
                _id
                name
                image
                title
                }
            }
        `
    };
        
    fetch('https://cnycserver.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(graphqlQuery)
    })
        .then(res => {
            return res.json();
        })
        .then(resData =>{
            if(resData.errors){
                dispatch({
                    type: PROFILE_ERROR,
                    payload: "There is a problem getting user information"
                });
            }
            dispatch({
                type: GET_USER,
                payload: resData.data.userById
            });
        })
        .catch(err => {
            dispatch({
                type: PROFILE_ERROR,
                payload: "Something went wrong, try again later"
            });
        });
};

export const getUserProfileDeals = (userId, type) => dispatch => {
    dispatch(setProfileDealsLoading());
    let graphqlQuery = {
        query: `
            query{
                userById(id:"${userId}"){
                    favorites {
                        id
                        name
                    }
                }
            }
        `
    };

    if(type === 'DealsAdded'){
        graphqlQuery = {
            query: `
                query{
                    userById(id:"${userId}"){
                        listOfPosts {
                            id
                            name
                        }
                    }
                }
            `
        };
    }

    fetch('https://cnycserver.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(graphqlQuery)
    })
        .then(res => {
            return res.json();
        })
        .then(resData =>{
            if(resData.errors){
                dispatch({
                    type: PROFILE_ERROR,
                    payload: "There is a problem getting deals list"
                });
            }
            else if(type === 'DealsAdded'){
                dispatch({
                    type: GET_USER_LISTOFDEALS,
                    payload: resData.data.userById.listOfPosts
                });
            }
            else{
                dispatch({
                    type: GET_USER_LISTOFDEALS,
                    payload: resData.data.userById.favorites
                });
            }
        })
        .catch(err => {
            dispatch({
                type: PROFILE_ERROR,
                payload: "Something went wrong, try again later"
            });
        });
    
};

const setProfileLoading = () => {
    return{
        type: PROFILE_USER_LOADING
    };
};

const setProfileDealsLoading = () => {
    return{
        type: PROFILE_DEALS_LOADING
    };
};