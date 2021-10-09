import { rootUrl } from '../../config/globalConfig'


export const actionTypes = {
    CHANGE: 'CHANGE',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR'
}

export const changeValue = (payload) => ({
    
    type: actionTypes.CHANGE,
    payload
})

export const registerError = (payload) => ({
    type: actionTypes.ERROR,
    payload
})

export const success = (payload) => ({
    type: actionTypes.SUCCESS,
    payload
})

export const searchContent = (data) => {
    const axios = require("axios");

    axios({
        url: ' http://localhost:3333/api/learningContents/',
        data: { data },
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSsOpc3NpY2EiLCJzdWIiOiI2MTU1MTI1YmQzZWZjZDdiODM1NWNhYjciLCJlbWFpbCI6Implc3NpY2FfcF9jcnV6QGhvdG1haWwuY29tIiwiaWF0IjoxNjMzNjYwOTg5LCJleHAiOjE2MzM3NDczODl9.CMKgEddQZeZ7_jj_SV3XBNtb5ySThagvppqH0Ai4E3o'
        },
    }).then(response => {
        
        console.log(JSON.stringify(response));
        if (response.status === 200) {
            localStorage.setItem('search_list', response.data);  
            window.location.replace(rootUrl + 'busca');
        }

    }).catch(error => {
       
    })
}