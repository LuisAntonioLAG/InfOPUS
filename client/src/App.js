import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom'
import { CssBaseline} from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";
import colors from './assets/themes/colors.js';
import { createTheme, responsiveFontSizes } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/pt-br';

import { useDispatch } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import { IconButton } from '@material-ui/core';

import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { closeSnackbar as closeSnackbarAction} from './actions/notificacoes.js'


import Interface from './components/Interface/Interface';
import LoginPage from './components/LoginPage/LoginPage.js'
import Notifier from './components/Interface/Components/Notifier.js';

  







const PrivateRouteDeslogado = ({ component: Component, ...rest }) => {


  return (

  
  <Route {...rest} render={(props) => (
    sessionStorage.getItem('profile')
      ? <Redirect to='/' />
      : <Component {...props} />
  )} />
  )
  }

//------- TEMAS ------------//


const App = () => {

    const themeMode = useSelector((store) => store.tema);
    const [user] = useState(JSON.parse(sessionStorage.getItem('profile')));
    const dispatch = useDispatch();
    const closeSnackbar = (...args) => dispatch(closeSnackbarAction(...args));  

    const BaseTheme = responsiveFontSizes(
      createTheme({
        palette: {
          type: themeMode.modo || 'light'
        },
        typography: {
          fontFamily: ["Ubuntu", "sans-serif"].join(",")
        }
      })
    );
    
    const Azul = {
      ...BaseTheme,
      palette: {
        ...BaseTheme.palette,
        primary: {
          ...BaseTheme.palette.primary,
          main: colors.blue3,
          light: colors.blue1,
          dark: colors.blue5
        },
        secondary: {
          ...BaseTheme.palette.primary,
          main: colors.green3,
          light: colors.green1,
          dark: colors.green5
        }
      }
    };
    
    const Verde = {
      ...BaseTheme,
      palette: {
        ...BaseTheme.palette,
        primary: {
          ...BaseTheme.palette.primary,
          main: colors.green3,
          light: colors.green1,
          dark: colors.green5
        },
        secondary: {
          ...BaseTheme.palette.primary,
          main: colors.blue3,
          light: colors.blue1,
          dark: colors.blue5
        }
      }
    };
    
    const themes = {
      Azul,
      Verde
    };
    
    function getTheme(theme) {
      return themes[theme];
    }

    const PrivateRouteLogado = ({ component: Component, ...rest }) => (
  
      <ThemeProvider theme={(getTheme(currentTheme)) || (getTheme(user?.result.tema))}>
      <Route {...rest} render={(props) => (
        sessionStorage.getItem('profile')
          ? <Component {...props} />
          : <Redirect to='/login' />
      )} />
       </ThemeProvider>
    )


    moment.locale('pt-br');
    //states

    const [currentTheme, setCurrentTheme] = useState(user?.result.tema)
    const [currentMode, setCurrentMode] = useState(themeMode.modo)

useEffect(()=> {
  setCurrentTheme(themeMode.cor)
},[themeMode.cor])

useEffect(()=> {
  setCurrentMode(themeMode.modo)
},[themeMode.modo])

  return (
      <ThemeProvider theme={Verde}>
      <CssBaseline />
      

      <SnackbarProvider maxSnack={2}
        key = {new Date().getTime() + Math.random()}
        action = { key => (<IconButton style={{color:'white'}} size='small' onClick={() => closeSnackbar(key)}> <CloseIcon/></IconButton>)}
        autoHideDuration = {4000}
        disableWindowBlurListener
        iconVariant = {
          {error: <ErrorIcon style={{marginRight: 8}} fontSize='small'/>,
          success: <CheckCircleIcon style={{marginRight: 8}} fontSize='small'/>,
          warning: <WarningIcon style={{marginRight: 8}} fontSize='small'/>,
          info: <InfoIcon style={{marginRight: 8}} fontSize='small'/>
          }}
      >
        <Notifier />

      <Switch>
        <PrivateRouteDeslogado exact path={'/login'} component={LoginPage}/>

        
        <PrivateRouteLogado path={'/'} component={Interface} />
       
      </Switch>

      </SnackbarProvider>

      </ThemeProvider>
  );
}

export default App