import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const LoginView = ( { formik, isFetching} ) =>{
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form onSubmit={formik.handleSubmit}>
                    <TextField 
                        label='Username' 
                        placeholder='Enter username' 
                        fullWidth 
                        required
                        value={formik.values.email}
                        onChange={formik.handleChange} />
                    <TextField 
                        label='Password' 
                        placeholder='Enter password' 
                        type='password' 
                        fullWidth 
                        required
                        value={formik.values.password}
                        onChange={formik.handleChange}/>
                    <FormControlLabel
                        control={ <Checkbox name="checkedB" color="primary"/> }
                        label="Remember me"
                    />

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
                        Sign in
                    </Button>
                    <Typography>
                        <Link href="#">Forgot password ?</Link>
                    </Typography>
                    <Typography > Do you have an account ?
                        <Link href="#">Sign Up</Link>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    )
}
export default LoginView;