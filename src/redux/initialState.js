const initialState = {
    auth: {
        username: '',
        email: '',
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage:  ''
    },
    register: {
        username: '',
        email: '',
        password: '',
        gender: '',
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
