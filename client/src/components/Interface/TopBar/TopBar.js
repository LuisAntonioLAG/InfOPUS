import React, {useContext} from 'react';
import clsx from 'clsx';
import {AppBar, Toolbar, Switch, IconButton, Typography, Avatar, FormControlLabel} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { CustomThemeContext } from '../../../assets/themes/CustomThemeProvider.js';
import {useStyles} from './TopBar.styles.js'

const TopBar = props => {

    const {
      open,setOpen = [],
    } = props;

    const classes = useStyles();
    const { currentTheme, setTheme } = useContext(CustomThemeContext)
    const isDark = Boolean(currentTheme === 'GreenDarkTheme')


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

          <Avatar/>

          <IconButton disableRipple> <ExitToAppIcon /> </IconButton>

        </Toolbar>
         
      </AppBar>
    )
}


export default TopBar;