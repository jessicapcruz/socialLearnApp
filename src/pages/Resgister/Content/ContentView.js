import React, { Fragment } from 'react';
import  {
    Paper,
    Box,
    Grid,
    TextField,
    Typography,
    FormControlLabel,
    Checkbox,
    Button} from '@material-ui/core';

const ContentView = (props) => {
    return (
        <Fragment>
            <Paper>
                <Box px={3} py={2}>
                    <Typography variant="h6" align="center" margin="dense">
                        Cadasto de Conteúdo
                    </Typography>
                    <form onSubmit={() => props.onSubmit()}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="fullname"
                                name="fullname"
                                label="Full Name"
                                fullWidth
                                margin="dense"
                                // {...register('fullname')}
                                // error={errors.fullname ? true : false}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {/* {errors.fullname?.message} */}
                            </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="username"
                                name="username"
                                label="Username"
                                fullWidth
                                margin="dense"
                                // {...register('username')}
                                // error={errors.username ? true : false}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {/* {errors.username?.message} */}
                            </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                margin="dense"
                                // {...register('email')}
                                // error={errors.email ? true : false}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {/* {errors.email?.message} */}
                            </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                fullWidth
                                margin="dense"
                                // {...register('password')}
                                // error={errors.password ? true : false}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {/* {errors.password?.message} */}
                            </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="confirmPassword"
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                fullWidth
                                margin="dense"
                                // {...register('confirmPassword')}
                                // error={errors.confirmPassword ? true : false}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {/* {errors.confirmPassword?.message} */}
                            </Typography>
                            </Grid>
                        </Grid>
                        <Box mt={3}>
                            <Button variant="contained" color="primary" >
                            Register
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Paper>
        </Fragment>
    );
}

export default ContentView;