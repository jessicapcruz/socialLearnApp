const initialState = {
    auth: {
        token: {},
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage:  ''
    },
    user: {
        username: '',
        email: ''
    },
    content: {  
        id: "",
        name: "",
        contentAreas: []
    },
    loading: {
        open: false,
        msg: ''
    },
    notify: {
        open:false,
        class: 'sucess',
        vertical: 'top',
        horizontal: 'center',
        time: 3000,
        msg: ''
    }
}
export default initialState;
