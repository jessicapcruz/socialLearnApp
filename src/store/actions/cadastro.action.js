import { toast } from 'react-toastify';
import {rootUrl } from '../../config/globalConfig'

export const actionTypes = {
    CHANGE: 'CHANGE',
    SUCCESS: 'SUCCESS',
    LOADING : 'LOADING',
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

export const registerUser = (data) => {
    const axios = require("axios");

    axios({
        url: 'http://localhost:3333/api/user/register',
        data: { name : data.name, password: data.senha,  email: data.email, gender: data.gender },
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => {
        if (response.status === 200) {
            notify('Usuário cadastrado com sucesso', 'sucess');
            window.location.replace(rootUrl + 'login');
        }

    }).catch(error => {
        notify(error.message, 'error');
    })
}

export const loading =  (bool, msg = null) => ({
    type: actionTypes.LOADING,
    isLoading: {
        active: bool, 
        msg: msg
    }
}) 

export const notify = (message, type)=>{ 
    if (type === 'error') {
      toast.error(message) 
    } else {
      toast.success(message) 
    }
}