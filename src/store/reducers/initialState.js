export default {
    auth: {
        token: {},
        credentials: {
            username: '',
            password: ''
        },
    },
    register: {
        username: '',
        email: '',
        password: '',
        error: {}
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