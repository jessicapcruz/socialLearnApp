const initialState = {
    auth: {
        username: '',
        email: '',
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage:  ''
    },
    user: {
        username: '',
        email: '',
        password: '',
        error: {}
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
    },
    search: {
        conteudo: {}
    }
}
export default initialState;
