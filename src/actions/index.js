import { Actions } from 'react-native-router-flux';

import { CHANGE_USER_EMAIL, CHANGE_USER_PASSWORD, LOGIN_USER, LOGOUT_USER, ERROR_LOGIN_USER, AUTH_LOADING } from './types';

export const changeUserEmail = text => {
    return{
        type: CHANGE_USER_EMAIL,
        payload: text
    }
}

export const changeUserPassword = text => {
    return{
        type: CHANGE_USER_PASSWORD,
        payload: text
    }
}

export const loginUser = userData => {
    return dispatch => {
        dispatch(setAuthLoading());
        let url = "https://cnycserver.herokuapp.com/users/login";
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              email: userData.email,
              password: userData.password
            }),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            if(data.success){
                dispatch({
                    type: LOGIN_USER,
                    payload: data.token
                })
                Actions.main();
            }
            else{
                dispatch({
                    type: ERROR_LOGIN_USER,
                    payload: data
                })
            }
            
        })
        .catch((err) => {
            dispatch({
                type: ERROR_LOGIN_USER,
                payload: {email: "Something went wrong, try again later"}
            })
        });
    }
}

export const logoutUser = text => {
    return{
        type: LOGOUT_USER
    }
}

const setAuthLoading = () => {
    return{
        type: AUTH_LOADING
    };
};