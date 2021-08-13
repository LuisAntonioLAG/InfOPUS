import React, {useState, useEffect, useContext} from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { Route } from 'react-router';
import {AppBar, Link, Box, Breadcrumbs, Toolbar, Switch, IconButton, Hidden, Typography, Avatar, FormControlLabel} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
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
    const [espessura, setEspessura] = useState(window.outerWidth)


    useEffect(() => {
        const updateWindowWidth = () => {
          setEspessura(window.outerWidth)
        }
    
        window.addEventListener('resize', updateWindowWidth);
    
        return () => window.removeEventListener('resize', updateWindowWidth);
      }, []);



    const handleThemeChange = (event) => {
        const { checked } = event.target
        if (checked) {
          setTheme('GreenDarkTheme')
        } else {
          setTheme('GreenLightTheme')
        }
        console.log(window.outerHeight>600)
      }


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const logout = () => {
      dispatch( {type: 'LOGOUT'});
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
        

          <FormControlLabel
            control={
              <Switch
                size='small'
                checked={isDark}
                onChange={handleThemeChange}
              />
            }
            label={espessura>960 ? "Modo Escuro" : ''}
            labelPlacement="bottom"
          />

          <Box px={1}>
          <Avatar className={classes.small} src={user?.result.foto} alt={user?.result.nome}>{user?.result.nome.charAt(0)}</Avatar>
          <Hidden smDown><Typography >{user?.result.nome}</Typography></Hidden>
          </Box>

          <IconButton size='small' onClick={logout}> <FontAwesomeIcon className={classes.titleIcon} icon={faSignOutAlt} /> </IconButton>

        </Toolbar>
         
      </AppBar>
    )
}


export default TopBar;