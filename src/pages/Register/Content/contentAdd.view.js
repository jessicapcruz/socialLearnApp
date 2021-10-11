import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import  { Paper, Box, Grid, TextField, Typography, Button} from '@material-ui/core';
import AutoCompleteArea from '../../../components/AutocompleteArea/AutocompleteArea'

const ContentAddView = (props) => {

    const validationSchema = yup.object({
        email: yup
          .string('Enter your email')
          .email('Enter a valid email')
          .required('Email is required'),
        password: yup
          .string('Enter your password')
          .min(8, 'Password should be of minimum 8 characters length')
          .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
          email: 'foobar@example.com',
          password: 'foobar',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Paper>
            <Box px={3} py={2}>
                <Typography variant="h6" align="center" margin="dense">
                    Cadasto de Conteúdo
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12}>
                        <AutoCompleteArea handleInputChange={props.handleContentAreas}/>
                        <Typography variant="inherit" color="textSecondary">
                            {/* {errors.fullname?.message} */}
                        </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                                fullWidth
                                id="name"
                                name="name"
                                label="Nome"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                                margin="dense" 
                                required
                                />
                        </Grid>
                    </Grid>
                    <Box mt={3}>
                        <Button variant="contained" color="primary" >
                            Cadastrar
                        </Button>
                    </Box>
                </form>
            </Box>
        </Paper>
    );
}
export default ContentAddView;