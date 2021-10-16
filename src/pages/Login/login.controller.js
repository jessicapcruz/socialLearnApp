import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory} from 'react-router-dom';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import {login, logout, clearState , authSelector} from './../../redux/slices/auth.slice'
import LoginView from './login.view';

const LoginController = () =>{
    const dispatch = useDispatch();
    const history = useHistory();
    const { isFetching, isSuccess, isError, errorMessage } = useSelector(authSelector);

    const formik = useFormik({
        initialValues: {
          username: '',
          senha: '',
        },
        onSubmit: values => dispatch(login({...values, history})),
        
    });

    useEffect(() => {
        return dispatch(clearState());
    });
    
    useEffect(() => {
        if (isError) {
            console.error(errorMessage);
            toast.error(errorMessage);
            dispatch(clearState());
        }

        if (isSuccess) {
            console.log('success', isSuccess);
            dispatch(clearState());
            history.push('/');
        }
    }, [isError, isSuccess]);

    return <LoginView formik={formik}  isFetching={isFetching}  />//onSubmit={handleSubmit(onSubmit)}
}

export default LoginController;