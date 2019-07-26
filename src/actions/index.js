import { Actions } from 'react-native-router-flux';

import { CHANGE_USER_EMAIL, CHANGE_USER_PASSWORD, LOGIN_USER } from './types';

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
                tokenG = data.token;
                Actions.main();
            }
            else{
                // this.setState({
                //     error: "Something went wrong, try again",
                //     loading: false
                // });
            }
            
        })
        .catch((err) => {
            console.log('There was a problem with your fetch request' + err.message);
            // this.setState({loading: false});
        });
    }
}