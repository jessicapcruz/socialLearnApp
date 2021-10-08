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
        },
    }).then(response => {
        console.log(JSON.stringify(response));
        if (response.status === 200) {
            window.location.replace(rootUrl + 'busca');
        }

    }).catch(error => {
       
    })
}