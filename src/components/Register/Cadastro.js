import React , { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from 'formik';
import * as yup from 'yup';
//import PropTypes from 'prop-types';
import { green } from '@mui/material/colors';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
//import Box from '@material-ui/core/Box';
import  Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import CircularProgress from '@mui/material/CircularProgress';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import { notify } from './../../common/util';
//import { registerUser  } from '../../store/actions/cadastro.action';
import { registerUser } from "../../redux/slices/user.register.slice";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const useStylesSelect = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  

export default function Cadastro() {
  const classes = useStyles();
  const classesSelect = useStylesSelect();

  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  
  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    pass: yup
      .string('Enter your password')
      .required('Password is required'),
    checkPass: yup.string()
      .oneOf([yup.ref('pass'), null], 'Passwords must match')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      gender: '',
      pass: '',
      checkPass: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      //alert(JSON.stringify(values));
      dispatch(registerUser({  name : values.name, senha: values.pass,  email: values.email, gender: values.gender}))
       .unwrap()
       .then(data => {
        setLoading({open: false });
         console.log(data);
      //   // setUser({
      //   //   id: data.id,
      //   //   title: data.title,
      //   //   description: data.description,
      //   //   published: data.published
      //   // });
         notify('Usuário cadastrado com sucesso', 'sucess');
      //   //window.location.replace(rootUrl + 'login');
       })
       .catch(e => {
        setLoading(false);
         console.log(e);
         notify('Erro ao cadastrar', 'error');
       });
    },
});

  // const handleChangeGender = (event) => {
  //   const { gender, value } = event.target;
  //   setUser({ ...userState, [gender]: value });
  // };

  // const handleChangeName = (event) => {
  //   const { name, value } = event.target;
  //   setUser({ ...userState, [name]: value });
  // };

  // const handleChangeEmail = (event) => {
  //   const { email, value } = event.target;
  //   setUser({ ...userState, [email]: value });
  // };
  // const handleChangePass = (event) => {
  //   const { pass, value } = event.target;
  //   setUser({ ...userState, [pass]: value });
  // };
  // const handleChangeCheckPass = (event) => {
  //   const { checkPass, value } = event.target;
  //   setUser({ ...userState, [checkPass]: value });
  // };

  return (
        <div className={classes.root}>
          <ToastContainer />
          <div className="text-start">
            
          </div>
          <div className="container">
            <Typography className="mt-3" component="h1" variant="h6">
                Inscreva-se e comece a aprender!
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nome"
                name="name"
                type="text"
                value={formik.values.name}
                //error={formik.touched.name && Boolean(formik.errors.name)}
                onChange={formik.handleChange}
              />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                type="email"
                value={formik.values.email}
                //error={formik.touched.name && Boolean(formik.errors.name)}
                onChange={formik.handleChange}
              />  
            <FormControl className={classesSelect.formControl}>
              <InputLabel id="gender">Genero</InputLabel>
              <Select
                  labelId="gender"
                  id="gender"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  >
                  <MenuItem value={'F'}>Feminino</MenuItem>
                  <MenuItem value={'M'}>Masculino</MenuItem>
              </Select>
            </FormControl>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="pass"
                label="Senha"
                name="pass"
                type="password"
                value={formik.values.pass}
                //error={formik.touched.name && Boolean(formik.errors.name)}
                onChange={formik.handleChange}
              /> 
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="checkPass"
                label="Confirmar senha"
                name="checkPass"
                type="password"
                value={formik.values.checkPass}
                //error={formik.touched.name && Boolean(formik.errors.name)}
                onChange={formik.handleChange}
              />  
              <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  color="primary"
                  size="large"
                  className="mb-3 mb-md-4 mt-4">
                  Criar conta {loading && (<CircularProgress   sx={{color: green[500] }} />)}
              </Button>
            </form>
          </div>   
        </div>

  );
  
}