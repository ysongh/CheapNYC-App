import {
    GET_USER
} from './types';

export const getUser = (userId) => dispatch => {
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
                return console.log(resData.errors);
            }
            dispatch({
                type: GET_USER,
                payload: resData.data.userById
            });
        })
        .catch(err => {
            console.log(err);
        });
};