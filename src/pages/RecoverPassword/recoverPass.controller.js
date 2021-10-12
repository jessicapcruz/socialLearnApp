import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory} from 'react-router-dom';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import {clearState , authSelector} from './../../redux/slices/auth.slice'
import {recover} from './../../redux/slices/user.register.slice'
import RecoverPassView from './recoverPass.view';
import { notify } from './../../common/util';

const RecoverPassController = () =>{
    const dispatch = useDispatch();
    const history = useHistory();
    const { isFetching, isSuccess, isError, errorMessage } = useSelector(authSelector);

    const formik = useFormik({
        initialValues: {
          username: ''
        },
        onSubmit: values => dispatch(recover({...values, history}))
        .then(data => {    
            notify('Foi enviado um email com instruções para recuperar sua senha', 'sucess');
         }),
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

    return <RecoverPassView formik={formik}  isFetching={isFetching}  />
}

export default RecoverPassController;