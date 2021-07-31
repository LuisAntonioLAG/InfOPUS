import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import {Box, Container, AppBar, Paper ,Toolbar, Typography, IconButton, InputBase, Switch, Avatar, Drawer, List, ListItemIcon, ListItemText, Divider, Zoom} from '@material-ui/core';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';

import LogoGrandeBranco from '../../assets/images/LogoGrandeBranco.png'
import Routes from '../../Routes.js'

import { CustomThemeContext } from '../../assets/themes/CustomThemeProvider'
import { useStyles, MenuItemTooltip, MenuItem} from './Interface.styles.js';

const Interface = props => {
    const {
        menuItems = [],
    } = props;

    const classes = useStyles();
    const { currentTheme, setTheme } = useContext(CustomThemeContext)
    const isDark = Boolean(currentTheme === 'GreenDarkTheme')
  



    //states

    const [open, setOpen] = useState(false);
    const [selectedListItem, setSelectedListItem] = useState();


    

    //handlers

    const handleThemeChange = (event) => {
      const { checked } = event.target
      if (checked) {
        setTheme('GreenDarkTheme')
      } else {
        setTheme('GreenLightTheme')
      }
    }



    const handleListItemClick = (event, index) => {
      setSelectedListItem(index);
    };

    
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    
    const handleDrawerClose = () => {
      setOpen(false);
    };


    return(
        <div className={classes.root}>
            <AppBar color='primary' className={clsx(classes.appBar, {[classes.appBarShift]: open,})} >
                <Toolbar >


                    <IconButton onClick={handleDrawerOpen} edge = 'start' className={clsx(classes.menuButton, {[classes.hide]: open,})} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{ flex: 1 }} variant="h6" noWrap>InfOPUS</Typography>

                  
                    <div className={classes.search} >
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Pesquise…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    
                     
                    <IconButton color='secondary' aria-label="configurations" onClick>
                        <Brightness1Icon/>
                    </IconButton>


                    {isDark === false &&
                    <WbSunnyIcon/>
                    }
                    <Switch
                      checked={isDark}
                      onChange={handleThemeChange}
                      name="Modo Escuro"
                    />
                    {isDark === true &&
                    <NightsStayIcon />
                    }


                        <Avatar/>
                        <IconButton aria-label="configurations">
                            <ExitToAppIcon />
                        </IconButton>

                </Toolbar>
            </AppBar>

            <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose} className={classes.listItemIcon} >
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />


        <Container style={{display: 'flex', justifyContent: 'center', padding: '20px 0'}}>
        <img className={classes.logoside} alt='Logo da OPUS' src={LogoGrandeBranco}/>
        </Container>

        <List component="nav">
            {menuItems.slice(0, 2).map((item, index) => (
                <React.Fragment key={item.name}>
                <Link className={classes.link} to={item.to}>
                <MenuItemTooltip interactive placement="right" title={open===false ? item.name : ''} TransitionComponent={Zoom}>
                <MenuItem disableRipple button selected={selectedListItem === item.name} onClick={(event) => handleListItemClick(event, item.name)}>
                <ListItemIcon className={classes.listItemIcon}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
                </MenuItem>
                </MenuItemTooltip>
                </Link>
                </React.Fragment>
            ))}
        </List>
        <Divider />
        <List component="nav">
            {menuItems.slice(2,8).map((item, index) => (
                <React.Fragment key={item.name}>
                <Link className={classes.link} to={item.to}>
                <MenuItemTooltip interactive placement="right" title={open===false ? item.name : ''} TransitionComponent={Zoom}>
                <MenuItem disableRipple button selected={selectedListItem === item.name}
                 onClick={(event) => handleListItemClick(event, item.name)}>
                <ListItemIcon className={classes.listItemIcon}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
                </MenuItem>
                </MenuItemTooltip>
                </Link>
                </React.Fragment>
            ))}
        </List>
        <Divider/>
        <List>
            {menuItems.slice(8).map((item, index) => (
                <React.Fragment key={item.name}>
                <Link className={classes.link} to={item.to}>
                <MenuItemTooltip interactive placement="right" title={open===false ? item.name : ''} TransitionComponent={Zoom}>
                <MenuItem disableRipple button selected={selectedListItem === item.name}
                 onClick={(event) => handleListItemClick(event, item.name)}>
                <ListItemIcon className={classes.listItemIcon}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
                </MenuItem>
                </MenuItemTooltip>
                </Link>
                </React.Fragment>
                
            ))}
        </List>
        <Divider />

        <Typography style={{ paddingTop: "20px" }} align="center" variant="caption" >
          InfOPUS
        </Typography>
        <Typography style={{ paddingBottom: "20px" }} align="center" variant="caption"
        >
          v1.0.0
        </Typography>     



      </Drawer>

        
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Paper className={classes.paper} elevation={4}>
            <Routes/>
        </Paper>
      </main>
    </div>
    );
}

export default Interface