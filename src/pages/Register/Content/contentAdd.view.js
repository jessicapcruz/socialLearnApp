import 'react-toastify/dist/ReactToastify.css'

import React from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { green } from '@mui/material/colors';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import  { Box, Grid, TextField, Typography, Button} from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import { notify } from './../../../common/util';
import areaContents from '../../../components/AutocompleteArea/areaContentsData'
import AutoCompleteArea from '../../../components/AutocompleteArea/AutocompleteArea'
import { registerContent } from "../../../redux/slices/content.slice";


const ContentAddView = ({handleContentAreas}) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          backgroundColor: theme.palette.background.paper,
        },
    }));
    const classes = useStyles();

    const validationSchema = yup.object({
        name: yup
          .string('Entre com o nome')
          .required('Nome é obrigatório'),
        // contentAreaIds: yup.array()
        // .max(1, "Pick at least 3 tags")
        // .of(
        //     yup.object().shape({
        //     label: yup.string().required(),
        //     value: yup.string().required()
        //   })
        // )
    });

    const formik = useFormik({
        initialValues: {
          name: '',
          contentAreaIds: [],
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if(values.contentAreaIds.length <= 0)
                notify('Selecione ao menos uma área', 'warn');
            else{
                setLoading(true);
                dispatch(registerContent({  name : values.name, contentAreaIds: values.contentAreaIds.map(a => a.id)}))
                .unwrap()
                .then(data => {
                    setLoading(false);
                    notify('Conteúdo cadastrado com sucesso', 'sucess');
                    history.push('/content-list');
                })
                .catch(e => {
                    setLoading(false);
                    console.log(e);
                    notify('Erro ao cadastrar', 'error');
                });
            }
        },
    });

    return (
        <div>
            <div className="pt-2 ">
                <div className={classes.root}>
                    <ToastContainer />
                    <div className="container">
                        <Box px={3} py={2}>
                            <Typography variant="h6" align="center" margin="dense">
                                Cadasto de Conteúdo
                            </Typography>
                            <form onSubmit={formik.handleSubmit}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} sm={12}>
                                        <AutoCompleteArea 
                                            id="contentAreaIds" 
                                            name="contentAreaIds" 
                                            options={areaContents}
                                            setFieldValue={formik.setFieldValue}
                                            handleInputChange={formik.handleChange}/>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                    <TextField
                                            id="name"
                                            name="name"
                                            fullWidth
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
                                    <Button 
                                        type="submit" 
                                        variant="contained" 
                                        color="primary">
                                        Cadastrar {loading && (<CircularProgress   sx={{color: green[500] }} />)}
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContentAddView;