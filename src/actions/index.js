import { CHANGE_USER_EMAIL, CHANGE_USER_PASSWORD } from './types';

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