import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { CssBaseline } from '@material-ui/core';
import CustomThemeProvider from './assets/themes/CustomThemeProvider.js';
import moment from 'moment';
import 'moment/locale/pt-br';


import Interface from './components/Interface/Interface';
import LoginPage from './components/LoginPage/LoginPage.js'


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    sessionStorage.getItem('profile')
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

const App = () => {


    moment.locale('pt-br');
    //states


  return (
      <CustomThemeProvider>
      <CssBaseline />
      <Switch>
      <Route exact path={'/login'} component={LoginPage}/>
      <PrivateRoute path={'/'} component={Interface}/>
      </Switch>
      </CustomThemeProvider>
  );
}

export default App