import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { Route } from 'react-router';
import {AppBar, Link, Box, Breadcrumbs, Toolbar, IconButton, Hidden, Typography, Avatar} from '@material-ui/core'

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuIcon from '@material-ui/icons/Menu';

import { CustomThemeContext } from '../../../assets/themes/CustomThemeProvider.js';
import {useStyles} from './TopBar.styles.js'

const TopBar = props => {

    const {
      open,setOpen = [],
      breadcrumbNameMap = [],
    } = props;

    const classes = useStyles();
    const [user] = useState(JSON.parse(sessionStorage.getItem('profile')));
    const { currentTheme, setTheme } = useContext(CustomThemeContext)
    const isDark = Boolean(currentTheme === 'GreenDarkTheme')
    const dispatch = useDispatch();
    const history = useHistory();
    const LinkRouter = (props) => <Link {...props} component={RouterLink} />;


    const handleThemeButton = () => {
      if (currentTheme === 'GreenDarkTheme') {
        setTheme('GreenLightTheme')
      } else {
        setTheme('GreenDarkTheme')
      }
    };


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const logout = () => {
      history.push('/login');
      sessionStorage.clear();
    }


    return (
        <AppBar color='primary' className={clsx(classes.appBar, {[classes.appBarShift]: open,})} >
        <Toolbar >

          <IconButton onClick={handleDrawerOpen} edge = 'start' className={clsx(classes.menuButton, {[classes.hide]: open,})} > <MenuIcon /> </IconButton>
                  
          

        <Hidden xsDown>
          <Route>
          {({ location }) => {
            const pathnames = location.pathname.split('/').filter((x) => x);

            return (
              <Breadcrumbs style={{ flex: 1 }}>
                <LinkRouter color="inherit" to="/">
                  Início
                </LinkRouter>
                {pathnames.map((value, index) => {
                  const last = index === pathnames.length - 1;
                  const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                  return last ? (
                    <Typography color="textPrimary" key={to}>
                      {breadcrumbNameMap[to]}
                    </Typography>
                  ) : (
                    <LinkRouter color="inherit" to={to} key={to}>
                      {breadcrumbNameMap[to]}
                    </LinkRouter>
                  );
                })}
              </Breadcrumbs>
            );
          }}
        </Route>
        </Hidden>

            
        <Typography style={{ flex: 1 }} variant="h6" noWrap>InfOPUS</Typography>
          

        <IconButton   onClick={handleThemeButton}> {isDark ? <BrightnessHighIcon/> : <Brightness4Icon/>} </IconButton>

        <Box px={1}>
          <Avatar  src={user?.result.foto} alt={user?.result.nome}>{user?.result.nome.charAt(0)}</Avatar>
          </Box>

          <IconButton onClick={logout}> <ExitToAppIcon/> </IconButton>

        </Toolbar>
         
      </AppBar>
    )
}


export default TopBar;