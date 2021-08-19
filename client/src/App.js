import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { CssBaseline} from '@material-ui/core';
import CustomThemeProvider from './assets/themes/CustomThemeProvider.js';
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
import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction,} from './actions/notificacoes.js'


import Interface from './components/Interface/Interface';
import LoginPage from './components/LoginPage/LoginPage.js'
import Notifier from './components/Interface/Components/Notifier.js';

  



const PrivateRouteLogado = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    sessionStorage.getItem('profile')
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)


const PrivateRouteDeslogado = ({ component: Component, ...rest }) => {


  return (


  <Route {...rest} render={(props) => (
    sessionStorage.getItem('profile')
      ? <Redirect to='/' />
      : <Component {...props} />
  )} />
  )
  }




const App = () => {

    const dispatch = useDispatch();
    const closeSnackbar = (...args) => dispatch(closeSnackbarAction(...args));  



    moment.locale('pt-br');
    //states


  return (
      <CustomThemeProvider>
      <CssBaseline />

      <SnackbarProvider maxSnack={2}
        key = {new Date().getTime() + Math.random()}
        action = { key => (<IconButton style={{color:'white'}} size='small' onClick={() => closeSnackbar(key)}><CloseIcon/></IconButton>)}
        preventDuplicate = {true}
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

      </CustomThemeProvider>
  );
}

export default App