import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import {AppBar, Box, Toolbar, Switch, IconButton, Typography, Avatar, FormControlLabel} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { CustomThemeContext } from '../../../assets/themes/CustomThemeProvider.js';
import {useStyles} from './TopBar.styles.js'

const TopBar = props => {

    const {
      open,setOpen = [],
    } = props;

    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('profile')));
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
      setUser(null);
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

          <Box px={2}>
          <Avatar className={classes.small} src={user?.result.imageUrl}/>
          <Typography >{user?.result.name}</Typography>
          </Box>

          <IconButton disableRipple onClick={logout}> <ExitToAppIcon /> </IconButton>

        </Toolbar>
         
      </AppBar>
    )
}


export default TopBar;