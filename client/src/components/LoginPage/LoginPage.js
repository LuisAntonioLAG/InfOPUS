
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {Container, Button, Checkbox, Link, Paper, Box, Grid, Typography, FormControlLabel, IconButton, InputAdornment} from '@material-ui/core'
import { useTheme } from '@material-ui/styles';
import { GoogleLogin } from 'react-google-login';
import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import { useStyles } from './LoginPage.styles';
import GoogleIcon from './GoogleIcon';
import LogoGrandeBranco from '../../assets/images/LogoGrandeBranco.png'
import LogoGrandePreto from '../../assets/images/LogoGrandePreto.png'

const LoginPage = () => {

    const classes = useStyles();
    const theme = useTheme();
    const [infoUser,setInfoUser] = useState({firstName: '', lastName: '', email: '', senha:'', confirmSenha:''});
    const dispatch = useDispatch();
    const history = useHistory();

    const [showPassword, setShowPassword] = useState(false);



    const handleChange = (e) => 
    setInfoUser({ ...infoUser, [e.target.name]: e.target.value });

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)


    const handleSubmit = (e) => {
      e.preventDefault();

      console.log(infoUser)
    };

    const googleSuccess = async (res) => {
      const result = res?.profileObj;
      const token = res?.tokenId;

      try {
        dispatch({ type: 'AUTH', data: { result, token } })

        history.push('/'); 
      } catch (error) {
        console.log(error)
      }
    };

    const googleError = (error) => {
      console.log(error);
      console.log('Login com o Google Falhou. Tente novamente mais tarde.')
    };



    return (

      <Grid container component="main" className={classes.root}>

        <Grid item xs={false} sm={4} md={7} className={classes.image} />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>

          <Container style={{display: 'flex', justifyContent: 'center', padding: '20px 0'}}> <img className={classes.logo} alt='Logo da OPUS' src={theme.palette.type === 'light' ? LogoGrandePreto: LogoGrandeBranco}/> </Container>
          
          <Typography component="h1" variant="h5" color='primary'>
            Bem-vindo ao InfOPUS!
          </Typography>

          <ValidatorForm autoComplete="off" onSubmit={handleSubmit}>
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
              autoFocus
          />

          <TextValidator
            fullWidth
            name='senha'
            color='secondary'
            label="Senha"
            type={showPassword ? "text" : "password"}
            validators={['required']}
            errorMessages={['Esse campo é obrigatório.']}
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
          
              <FormControlLabel
                  control={<Checkbox value="lembrar" color="primary" />}
                  label="Lembre-se de mim"
              />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Entrar
          </Button>

          <Link href="contatos" variant="body2">
                Esqueceu a senha?
              </Link>

          <GoogleLogin
            clientId="763772287440-dap091kdgvk00ihm4kmuhpgcg5u0e06r.apps.googleusercontent.com"
            render={(renderProps) => (
                <Button 
                  className={classes.submit} color='secondary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<GoogleIcon/>} variant='contained'> Login com o Google </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />

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