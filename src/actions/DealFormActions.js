import RNFetchBlob from 'react-native-fetch-blob';
import { Actions } from 'react-native-router-flux';

import {
    CHANGE_DEALINFO,
    DEALFORM_ERROR,
    CLEAR_DEALFORM_INPUTS,
    SET_DEALFORM_LOADING
} from './types';

export const changeDealInfor = ({ prop, value }) => {
    return{
        type: CHANGE_DEALINFO,
        payload: { prop, value }
    };
};

export const createNewDeal = (dealData, token, imageData) => {
    return dispatch => {
        dispatch(setDealFormLoading());

        const url = "https://cnycserver.herokuapp.com/items";
        const dataList = [
            { name: "name", data: dealData.name },
            { name: "category", data: dealData.category },
            { name: "price", data: dealData.price },
            { name: "location", data: dealData.location },
            { name: "city", data: dealData.city },
            { name: "description", data: dealData.description },
            { name: "company", data: dealData.company },
            { name: "duration", data: dealData.duration }
        ];

        if(imageData){
            dataList.push({ name: "image", filename: "image.png", type:"image/png", data: imageData });
        };
        
        RNFetchBlob.fetch('POST', url, {
            "Authorization": token,
            otherHeader : "foo",
            "Content-Type" : "multipart/form-data",
        }, dataList)
        .then(res => {
            return res.json();
        })
        .then(data => {
            if(data.msg){
                Actions.main();
            }
            else{
                dispatch({
                    type: DEALFORM_ERROR,
                    payload: data
                })
            }
        })
        .catch(err => {
            dispatch({
                type: DEALFORM_ERROR,
                payload: {"error": "Something went wrong"}
            })
        });
    };
};

export const clearDealFormInputs = () => {
    return{
        type: CLEAR_DEALFORM_INPUTS
    }
}

const setDealFormLoading = () => {
    return{
        type: SET_DEALFORM_LOADING
    }
}