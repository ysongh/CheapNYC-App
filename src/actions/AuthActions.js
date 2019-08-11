import jwt_decode from 'jwt-decode';
import { Actions } from 'react-native-router-flux';

import {
    CHANGE_USER_NAME,
    CHANGE_USER_EMAIL,
    CHANGE_USER_PASSWORD,
    CHANGE_USER_CONFIRM_PASSWORD,
    LOGIN_USER,
    LOGOUT_USER,
    ERROR_AUTH,
    AUTH_LOADING,
    CLEAR_INPUTS,
    SET_CURRENT_USER
} from './types';

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

export const changeUserConfirmPassword = text => {
    return{
        type: CHANGE_USER_CONFIRM_PASSWORD,
        payload: text
    }
}

export const changeUserName = text => {
    return{
        type: CHANGE_USER_NAME,
        payload: text
    }
}

export const registerUser = userData => {
    return dispatch => {
        dispatch(setAuthLoading());
        let url = "https://cnycserver.herokuapp.com/users/signup";
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              name: userData.name,
              email: userData.email,
              password: userData.password,
              confirmPassword: userData.confirmPassword
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
                });
                const decode = jwt_decode(data.token);
                
                dispatch(setCurrentUser(decode));
                dispatch(clearInputs());
                Actions.main();
            }
            else{
                dispatch({
                    type: ERROR_AUTH,
                    payload: data
                })
            }
            
        })
        .catch((err) => {
            dispatch({
                type: ERROR_AUTH,
                payload: {email: "Something went wrong, try again later"}
            })
        });
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
                });
                const decode = jwt_decode(data.token);

                dispatch(setCurrentUser(decode));
                dispatch(clearInputs());
                Actions.main();
            }
            else{
                dispatch({
                    type: ERROR_AUTH,
                    payload: data
                })
            }
            
        })
        .catch((err) => {
            dispatch({
                type: ERROR_AUTH,
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

export const clearInputs = () => {
    return{
        type: CLEAR_INPUTS
    }
}

const setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
  };