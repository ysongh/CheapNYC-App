import RNFetchBlob from 'react-native-fetch-blob';

import { Actions } from 'react-native-router-flux';

import {
    GET_USER,
    GET_USER_LISTOFDEALS,
    PROFILE_USER_LOADING,
    PROFILE_USER_REMOVELOADING,
    PROFILE_DEALS_LOADING,
    PROFILE_ERROR,
    IMAGE_LOADING,
    IMAGE_REMOVELOADING
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

export const updateUserInformation = (token, userIdProfile, name, interestList) => {
    return dispatch => {
        dispatch(setProfileLoading());

        let url = `https://cnycserver.herokuapp.com/users/${userIdProfile}/edit`;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
              name: name,
              title: interestList
            }),
            headers: {
              'Authorization': token,
              'Content-Type': 'application/json'
            }
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            if(data.msg){
                dispatch(removeProfileLoading());
                Actions.yourProfile({userId: userIdProfile});
            }
            else{
                console.log(data);
                dispatch(removeProfileLoading());
            }
            
        })
        .catch((err) => {
            console.log(err);
            dispatch(removeProfileLoading());
        });
    }
}

export const updateUserImage = (token, userIdProfile, imageData) => {
    return dispatch => {
        dispatch(setImageLoading());

        const url = `https://cnycserver.herokuapp.com/users/${userIdProfile}/edit-image`;

        RNFetchBlob.fetch('PUT', url, {
            'Authorization': token,
            otherHeader : "foo",
            'Content-Type' : 'multipart/form-data',
        }, [
            { name : 'image', filename : 'image.png', type:'image/png', data: imageData}
        ])
        .then(res => {
            return res.json();
        })
        .then(resData => {
            dispatch({
                type: GET_USER,
                payload: resData.user
            });
            dispatch(removeImageLoading());
            Actions.yourProfile({userId: userIdProfile});
        }).catch(err => {
            console.log(err);
            dispatch(removeImageLoading());
        })
    }
}

const setProfileLoading = () => {
    return{
        type: PROFILE_USER_LOADING
    };
};

const removeProfileLoading = () => {
    return{
        type: PROFILE_USER_REMOVELOADING
    };
};

const setProfileDealsLoading = () => {
    return{
        type: PROFILE_DEALS_LOADING
    };
};

const setImageLoading = () => {
    return{
        type: IMAGE_LOADING
    };
};

const removeImageLoading = () => {
    return{
        type: IMAGE_REMOVELOADING
    };
};