import {
    CHANGE_DEALINFO
} from './types';

export const changeDealInfor = ({ prop, text }) => {
    return{
        type: CHANGE_DEALINFO,
        payload: { prop, text }
    }
}