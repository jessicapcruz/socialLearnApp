import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { loginAuth, authSelector, clearState } from './../../redux/slices/auth.slice';
import LoginView from './login.view';

const LoginController = () =>{
    const dispatch = useDispatch();
    const history = useHistory();
    const { handleSubmit } = useForm();
    const { isFetching, isSuccess, isError, errorMessage } = useSelector(authSelector);

    const onSubmit = data => dispatch(loginAuth(data));

    useEffect(() => {
        return dispatch(clearState());
    }, []);
    
    useEffect(() => {
        if (isError) {
            toast.error(errorMessage);
            dispatch(clearState());
        }

        if (isSuccess) {
            dispatch(clearState());
            history.push('/');
        }
    }, [isError, isSuccess]);

    return <LoginView onSubmit={handleSubmit(onSubmit)} isFetching={isFetching}  />
}

export default LoginController;