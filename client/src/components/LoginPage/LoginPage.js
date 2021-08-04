
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import {Container, Button, Checkbox, Link, Paper, Box, Grid, Typography, FormControlLabel, IconButton, InputAdornment} from '@material-ui/core'
import { useTheme } from '@material-ui/styles';
import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import { useStyles } from './LoginPage.styles';
import LogoGrandeBranco from '../../assets/images/LogoGrandeBranco.png'
import LogoGrandePreto from '../../assets/images/LogoGrandePreto.png'


import { logar, cadastrar, lembrar } from '../../actions/auth.js'

const LoginPage = () => {

    const [lembrado] = useState(JSON.parse(localStorage.getItem('lembrado')));
    const classes = useStyles();
    const theme = useTheme();
    const [infoUser, setInfoUser] = useState({nome: '', email: lembrado ? lembrado.email : "", senha:'', confirmSenha:''});
    const dispatch = useDispatch();
    const history = useHistory();

    const [showPassword, setShowPassword] = useState(false);
    const [devoLembrar, setLembrar] = useState(true);
    const [isCadastro, setCadastro] = useState(false);




    const handleChange = (e) => 
    setInfoUser({ ...infoUser, [e.target.name]: e.target.value });

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const partialReset = {nome:'', confirmSenha:'', email: infoUser.email, senha: infoUser.senha}

    const handleSubmit = (e) => {
      e.preventDefault();

      if (isCadastro) {
        dispatch(cadastrar(infoUser, history))
      } else {
        dispatch(logar(infoUser, history))
          if(devoLembrar) 
          {dispatch(lembrar(infoUser.email))
          } else{
            localStorage.clear();
          }
      }
    };

    const handleLembrar = () => {
      setLembrar(!devoLembrar)
    }

    const handleCadastro = () => {
    setCadastro(!isCadastro);
    setInfoUser(partialReset)
    setShowPassword(false)
  };


    return (

      <Grid container component="main" className={classes.root}>

        <Grid item xs={false} sm={4} md={7} className={classes.image} />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>

          <Container className={classes.logoContainer}> <img className={classes.logo} alt='Logo da OPUS' src={theme.palette.type === 'light' ? LogoGrandePreto: LogoGrandeBranco}/> </Container>
          
          <Typography component="h1" variant="h5" color='primary'>
            {isCadastro ? 'Cadastre-se no InfOPUS!' : 'Bem-vindo ao InfOPUS!'} 
          </Typography>


          <ValidatorForm className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
            
          {
            isCadastro && (
              <TextValidator autoFocus fullWidth name='nome' color='secondary'  margin='normal' label='Nome' onChange={handleChange} value={infoUser.nome} validators={['required']} errorMessages={['Esse campo é obrigatório.']}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <AccountCircleIcon color='secondary'/>
                                </InputAdornment>
                              ),
                            }}
              />
            )
          }

            <TextValidator
              fullWidth
              name='email'
              margin='normal'
              color='secondary'
              label="E-mail"
              validators={['required','isEmail']}
              errorMessages={['Esse campo é obrigatório.','Escreva um e-mail válido.']}
              value={infoUser.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon color='secondary'/>
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
          />

          <TextValidator
            fullWidth
            name='senha'
            color='secondary'
            label="Senha"
            margin='normal'
            type={showPassword ? "text" : "password"}
            validators={['required', 'minStringLength:8']}
            errorMessages={['Esse campo é obrigatório.','Sua senha deve conter, no mínimo, 8 caracteres.']}
            value={infoUser.senha}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color='secondary'/>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" >
                  <IconButton color='secondary' onClick={handleShowPassword}>{showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}</IconButton>
                </InputAdornment>
              ),
            }}
            onChange={handleChange}
          />

            {
            isCadastro && (
              <>
              <TextValidator
              fullWidth
              name='confirmSenha'
              color='secondary'
              label="Confirme a senha"
              margin='normal'
              type={showPassword ? "text" : "password"}
              validators={['required']}
              errorMessages={['Esse campo é obrigatório.']}
              value={infoUser.confirmSenha}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon color='secondary'/>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end" >
                    <IconButton color='secondary' onClick={handleShowPassword}>{showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}</IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />

            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setInfoUser({ ...infoUser, foto: base64 })} /></div>
            </>
            )
          }


            {
            !isCadastro && (
              <FormControlLabel
                  control={<Checkbox checked={devoLembrar} onChange={handleLembrar} value="lembrar" color="primary" />}
                  label="Lembre-se de mim"
              />
            )}

          <Button
            disableRipple
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
          { isCadastro ? 'Cadastrar' : 'Entrar'}
          </Button>

          {!isCadastro &&
          <Link href="contatos" variant="body2">
                Esqueci minha senha
              </Link>}
      

          <Button
            disableRipple
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handleCadastro}
          >
            { isCadastro ? 'Já fui cadastrado' : 'Fazer cadastro'}
          </Button>


          <Box mt={5}>
            <Typography variant="body2" color="textSecondary" align="center">
              {'Copyright © '}
            <Link color="inherit" href="https://www.opusengenhariajr.com.br">
              OPUS Engenharia JR
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
            </Typography>
          </Box>

          </ValidatorForm>
          </div>


        </Grid>
      </Grid>



  );
}



export default LoginPage