import { Actions } from 'react-native-router-flux';
import {
    CHANGE_DEALINFO
} from './types';

export const changeDealInfor = ({ prop, value }) => {
    return{
        type: CHANGE_DEALINFO,
        payload: { prop, value }
    };
};

export const createNewDeal = (dealData, token) => {
    return dispatch => {
        const url = "https://cnycserver.herokuapp.com/items";
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name: dealData.name,
                category: dealData.category,
                price: dealData.price,
                location: dealData.location,
                city: dealData.city,
                description: dealData.description,
                company: dealData.company,
                duration: dealData.duration
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
                Actions.main()({userId: userIdProfile});
            }
            else{
                console.log(data);
            }
            
        })
        .catch(err => {
            console.log(err);
        });
    };
};