
import React from 'react';
import {Container, Button, Checkbox, Link, Paper, Box, Grid, Typography, FormControlLabel, InputAdornment} from '@material-ui/core'
import { useTheme } from '@material-ui/styles';
import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

import { useStyles } from './LoginPage.styles';
import LogoGrandeBranco from '../../assets/images/LogoGrandeBranco.png'
import LogoGrandePreto from '../../assets/images/LogoGrandePreto.png'

const LoginPage = () => {

    const classes = useStyles();
    const theme = useTheme();



    const handleSubmit = () => {

    };

    return (

      <Grid container component="main" className={classes.root}>

        <Grid item xs={false} sm={4} md={7} className={classes.image} />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>

          <Container style={{display: 'flex', justifyContent: 'center', padding: '20px 0'}}> <img className={classes.logo} alt='Logo da OPUS' src={theme.palette.type === 'light' ? LogoGrandePreto: LogoGrandeBranco}/> </Container>
          
          <Typography component="h1" variant="h5" color='primary'>
            Login
          </Typography>

          <ValidatorForm autoComplete="off" onSubmit={handleSubmit}>
            <TextValidator
              fullWidth
              margin='normal'
              color='secondary'
              label="E-mail*"
              validators={['required','isEmail']}
              errorMessages={['Esse campo é obrigatório.','Escreva um e-mail válido.']}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon color='secondary'/>
                  </InputAdornment>
                ),
              }}
          />

          <TextValidator
            fullWidth
            color='secondary'
            label="Senha*"
            type='password'
            validators={['required']}
            errorMessages={['Esse campo é obrigatório.']}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color='secondary'/>
                </InputAdornment>
              ),
            }}
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