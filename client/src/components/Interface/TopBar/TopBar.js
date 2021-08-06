import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import {AppBar, Box, Toolbar, Switch, IconButton, Typography, Avatar, FormControlLabel} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { CustomThemeContext } from '../../../assets/themes/CustomThemeProvider.js';
import {useStyles} from './TopBar.styles.js'

const TopBar = props => {

    const {
      open,setOpen = [],
    } = props;

    const classes = useStyles();
    const [user] = useState(JSON.parse(sessionStorage.getItem('profile')));
    const { currentTheme, setTheme } = useContext(CustomThemeContext)
    const isDark = Boolean(currentTheme === 'GreenDarkTheme')
    const dispatch = useDispatch();
    const history = useHistory();


    const handleThemeChange = (event) => {
        const { checked } = event.target
        if (checked) {
          setTheme('GreenDarkTheme')
        } else {
          setTheme('GreenLightTheme')
        }
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

          <IconButton onClick={handleDrawerOpen} edge = 'start' className={clsx(classes.menuButton, {[classes.hide]: open,})} aria-label="menu"> <MenuIcon /> </IconButton>
                  
          <Typography style={{ flex: 1 }} variant="h6" noWrap>InfOPUS</Typography>

          <FormControlLabel
            control={
              <Switch
                size='small'
                checked={isDark}
                onChange={handleThemeChange}
              />
            }
            label="Modo Escuro"
            labelPlacement="bottom"
          />

          <Box px={1}>
          <Avatar className={classes.small} src={user?.result.foto} alt={user?.result.nome}>{user?.result.nome.charAt(0)}</Avatar>
          <Typography >{user?.result.nome}</Typography>
          </Box>

          <IconButton disableRipple onClick={logout}> <FontAwesomeIcon className={classes.titleIcon} size='xs' icon={faSignOutAlt} /> </IconButton>

        </Toolbar>
         
      </AppBar>
    )
}


export default TopBar;