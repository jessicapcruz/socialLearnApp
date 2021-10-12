import React from 'react';
import { TextField, Button, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const RecoverPassView = ( { formik, isFetching} ) =>{
    const btnstyle={margin:'8px 0'}

    return(
        <Container component="main" maxWidth="xs">
            <ToastContainer/>
            <div className="mt-3 mt-md-5">
                <div className="text-center">
                    <Typography className="mt-3 font-weight-normal" component="h1" variant="h6"> 
                        Esqueceu sua senha? Digite seu e-mail que enviaremos um link para definir uma nova senha.
                    </Typography>

                    <form onSubmit={formik.handleSubmit}>
                    <div className="mt-4">
                        <TextField
                            id="email" 
                            label='E-mail' 
                            placeholder='e-mail' 
                            fullWidth 
                            required
                            value={formik.values.email}
                            onChange={formik.handleChange} />
                        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>
                            {isFetching ? (
                                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24">
                                    <circle
                                        class="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        stroke-width="4">
                                    </circle>
                                    <path
                                        class="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                    </path>
                                </svg>
                            ) : null}
                                Recuperar
                    </Button>
                    </div>
                    </form>
                </div>
            </div>

        </Container>
    )
}
export default RecoverPassView;