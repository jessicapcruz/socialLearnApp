import React from 'react';
import { TextField, Button, Typography,Link } from '@material-ui/core'
import  { rootURL } from '../../common/constants';
import Container from '@material-ui/core/Container'

const LoginView = ( { formik, isFetching} ) =>{
    const btnstyle={margin:'8px 0'}

    return(
        <Container component="main" maxWidth="xs">
            <div className="mt-3 mt-md-5">
                <div className="text-center">
                    <Typography className="mt-3 font-weight-normal" component="h1" variant="h6"> 
                        Faça seu login e inicie seus estudos!
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                    <div className="mt-4">
                        <TextField 
                            label='Usuario' 
                            placeholder='usuario' 
                            fullWidth 
                            required
                            value={formik.values.email}
                            onChange={formik.handleChange} />

                        <TextField 
                            label='Senha' 
                            placeholder='senha' 
                            type='password' 
                            fullWidth 
                            required
                            value={formik.values.password}
                            onChange={formik.handleChange}/>

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
                                Entrar
                    </Button>
                    <Typography>
                        <Link href="#">Esqueceu sua senha ?</Link>
                    </Typography>
                    <Typography > Tem uma conta ?
                        <Link href={ rootURL + '/user-add'} > Cadastre-se</Link>
                    </Typography> 
                    </div>
                    </form>
                </div>
            </div>
            
        </Container>
    )
}
export default LoginView;