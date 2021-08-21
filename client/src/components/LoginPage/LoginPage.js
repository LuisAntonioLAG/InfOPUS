
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {Container, TextField, Button, Checkbox, Link, Paper, Box, Grid, Typography, FormControlLabel, CircularProgress, IconButton, InputAdornment} from '@material-ui/core'
import { useTheme } from '@material-ui/styles';
import { ValidatorForm } from 'react-material-ui-form-validator';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAt } from '@fortawesome/free-solid-svg-icons'

import { useStyles } from './LoginPage.styles';
import LogoGrandeBranco from '../../assets/images/LogoGrandeBranco.png'
import LogoGrandePreto from '../../assets/images/LogoGrandePreto.png'


import { logar } from '../../actions/auth.js'


const LoginPage = () => {

    const [lembrado] = useState(JSON.parse(localStorage.getItem('lembrado')));
    const classes = useStyles();
    const theme = useTheme();
    const [infoUser, setInfoUser] = useState({email: lembrado ? lembrado.email : "", senha:''});
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLogando, setLogando] = useState(false)

    const [showPassword, setShowPassword] = useState(false);
    const [devoLembrar, setLembrar] = useState(true);


    const handleChange = (e) => 
    setInfoUser({ ...infoUser, [e.target.name]: e.target.value });

    const handleShowPassword = () =>  setShowPassword((prevShowPassword) => !prevShowPassword)

    const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(logar(infoUser, history, devoLembrar, setLogando))
    };
 

    const handleLembrar = () => {
      setLembrar(!devoLembrar)
    }


    return (

      <Grid container component="main" className={classes.root}>

        <Grid item xs={false} sm={4} md={7} className={classes.image} />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>

      
          <Container className={classes.logoContainer}> {isLogando ?  
          <CircularProgress thickness={2.5} size={82} color='secondary'/>
          : 
          <img className={classes.logo} alt='Logo da OPUS' src={theme.palette.type === 'light' ? LogoGrandePreto: LogoGrandeBranco}/> 
          }
          </Container>
        

          <Typography component="h1" variant="h5" color='primary'>
            Bem-vindo ao InfOPUS!
          </Typography>

          <ValidatorForm className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
            
         
            <TextField
              fullWidth
              name='email'
              margin='normal'
              color='secondary'
              label="E-mail"
              value={infoUser.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon className={classes.AwesomeIcon} icon={faAt} />
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
            

            <TextField
              fullWidth
              name='senha'
              color='secondary'
              label="Senha"
              margin='normal'
              type={showPassword ? "text" : "password"}
              value={infoUser.senha}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon style={{color: theme.palette.secondary.main}}/>
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
                  control={<Checkbox checked={devoLembrar} onChange={handleLembrar} value="lembrar" color="primary" />}
                  label="Lembre-se de mim"
              />


          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!infoUser.email || !infoUser.senha}
          >
          Entrar
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