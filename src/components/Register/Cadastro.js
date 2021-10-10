import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import  Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import { registerUser , notify } from '../../store/actions/cadastro.action';


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
  const [gender, setGender] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [checkPass, setCheckPass] = React.useState('');

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

 
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePass = (event) => {
    setPass(event.target.value);
  };
  const handleChangeCheckPass = (event) => {
    setCheckPass(event.target.value);
  };

  const cadastrar = () =>  {
    let mensagem = '';
    if (name.length === 0) {
      mensagem += 'O campo nome é obrigatório; ';
    } 
    if (email.length === 0) {
      mensagem += 'O campo e-mail é 0brigatório; ';
    } 
    if (pass.length === 0) {
      mensagem += 'O campo senha é obrigatório; ';
    } else {
      if (pass !== checkPass) {
        mensagem += 'As senhas devem ser iguais; ';
      }
    }

    if (mensagem.length !== 0) {
      notify ('Verifique o preenchimento dos campos obrigatório: ' + mensagem, 'error')
    } else {
      registerUser({  name : name, senha: pass,  email: email, gender: gender});
    }   
  }

  return (

        <div className={classes.root}>
          <ToastContainer />
          <div className="text-start">

          </div>

          <div className="container">
            <Typography className="mt-3" component="h1" variant="h6">
                Inscreva-se e comece a aprender!
            </Typography>
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
            <Button
                type="button"
                variant="contained"
                fullWidth
                color="primary"
                size="large"
                className="mb-3 mb-md-4 mt-4"
                onClick={() => cadastrar()}>
                Criar conta
            </Button> 
          </div>   
        </div>

  );
  
}