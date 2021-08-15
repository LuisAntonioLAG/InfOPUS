import React, {createRef} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { CssBaseline, IconButton } from '@material-ui/core';
import CustomThemeProvider from './assets/themes/CustomThemeProvider.js';
import moment from 'moment';
import 'moment/locale/pt-br';
import { SnackbarProvider } from 'notistack';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';

import CloseIcon from '@material-ui/icons/Close';

import Interface from './components/Interface/Interface';
import LoginPage from './components/LoginPage/LoginPage.js'

import { useTheme } from '@material-ui/styles';



const PrivateRouteLogado = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    sessionStorage.getItem('profile')
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

const notistackRef = React.createRef();

const onClickDismiss = key => () => { 
  notistackRef.current.closeSnackbar(key);
}

const PrivateRouteDeslogado = ({ component: Component, ...rest }) => {

  const theme=useTheme()

  return (

  <SnackbarProvider 
  ref={notistackRef}
  action={(key) => (<IconButton style={{color: 'white'}} size='small' onClick={onClickDismiss(key)}><CloseIcon/></IconButton>)}
  iconVariant = {
    {error: <ErrorIcon style={{marginRight: 8}} fontSize='small'/>,
    success: <CheckCircleIcon style={{marginRight: 8}} fontSize='small'/>,
    warning: <WarningIcon style={{marginRight: 8}} fontSize='small'/>,
    info: <InfoIcon style={{marginRight: 8}} fontSize='small'/>
    }}
  maxSnack={2} 
  autoHideDuration = {4000}
  variant = {'error'} 
  anchorOrigin = {{
    vertical: 'top',
    horizontal: 'right'}
  }>
  <Route {...rest} render={(props) => (
    sessionStorage.getItem('profile')
      ? <Redirect to='/' />
      : <Component {...props} />
  )} />
  </SnackbarProvider>
  )
  }




const App = () => {


    moment.locale('pt-br');
    //states


  return (
      <CustomThemeProvider>
      <CssBaseline />
      <Switch>
      <PrivateRouteDeslogado exact path={'/login'} component={LoginPage}/>
      <PrivateRouteLogado path={'/'} component={Interface} />
      </Switch>
      </CustomThemeProvider>
  );
}

export default App