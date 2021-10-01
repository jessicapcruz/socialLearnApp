import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import  Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ListaOpcoes from './../../components/ListaOpcoes/ListaOpcoes';

import Grid from '@material-ui/core/Grid';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
      
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const useStylesSelect = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 570,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  

export default function Cadastro() {
  const classes = useStyles();
  const classesSelect = useStylesSelect();
  const [value, setValue] = React.useState(0);
  const [gender, setGender] = React.useState('');
  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [checkPass, setCheckPass] = React.useState('');


  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const handleChangeGender = (event) => {
    console.log(event.target.value);
    setGender(event.target.value);
  };

  const handleChangeName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    console.log(event.target.value);
    setLastName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handleChangePass = (event) => {
    console.log(event.target.value);
    setPass(event.target.value);
  };
  const handleChangeCheckPass = (event) => {
    console.log(event.target.value);
    setCheckPass(event.target.value);
  };

  // const cadastrar = () =>  {
  //   const notify = (message, type)=>{ 
  //     if (type === 'error') {
  //       toast.error(message) 
  //     } else {
  //       toast.success(message) 
  //     }
  // }

  // const axios = require("axios");
  //  if (pass != checkPass ) {
  //    notify('As senhas precisam ser iguais', 'error');
  //  } else {
  //   axios({
  //     url: 'http://localhost:3333/api/user/register',
  //     data: {  name : name, password: pass,  email: email },
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   }).then(response => {
  //     if (response.statusCode === 200) {
  //       notify('Usuário cadastrado com sucesso', 'sucess');
  //     }
  //   }).catch(error => {
  //       notify(error.message, 'error');
  //   })
  //   }
  // }

  return (
    
        <div className={classes.root}>
          <ToastContainer />
          <div className="text-start">

          </div>

          <div className="container">
            <Typography className="mt-3" component="h1" variant="h6">
                Inscreva-se e comece a aprender!
            </Typography>
            <AppBar position="static" color="default">
                <Tabs value={value} onChange={handleChange} aria-label="etapas do cadastro" indicatorColor="primary" textColor="primary">
                <Tab label="Informações pessoais" {...a11yProps(0)} />
                <Tab label="Quer aprender sobre?" {...a11yProps(1)} />
                <Tab label="Quer compartilhar sobre?" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Nome"
                            name="name"
                            type="text"
                            value={name}
                            onChange={handleChangeName}
                            />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="sobrenome"
                            label="Sobrenome"
                            name="sobrenome"
                            type="text"
                            value={lastName}
                            onChange={handleChangeLastName}
                            />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            type="email"
                            value={email}
                            onChange={handleChangeEmail}
                            />  
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl className={classesSelect.formControl}>
                            <InputLabel id="genero">Genero</InputLabel>
                            <Select
                                labelId="genero"
                                id="genero"
                                value={gender}
                                onChange={handleChangeGender}
                                >
                                <MenuItem value={'F'}>Feminino</MenuItem>
                                <MenuItem value={'M'}>Masculino</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Senha"
                            name="password"
                            type="password"
                            value={pass}
                            onChange={handleChangePass}
                            /> 
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="confirmarpass"
                            label="Confirmar senha"
                            name="confirmarpass"
                            type="password"
                            value={checkPass}
                            onChange={handleChangeCheckPass}
                            />  
                    </Grid> 
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ListaOpcoes></ListaOpcoes>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ListaOpcoes></ListaOpcoes>
            </TabPanel>
            {/* <Button
                type="button"
                variant="contained"
                fullWidth
                color="primary"
                size="large"
                className="mb-3 mb-md-4 mt-4"
                onClick={() => cadastrar()}>
                Criar conta
            </Button> */}
          </div>   
        </div>

  );
  
}