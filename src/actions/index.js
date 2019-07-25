import { CHANGE_EMAIL } from './types';

export const changeEmail = text => {
    return{
        type: CHANGE_EMAIL,
        payload: text
    }
}