import React, {useState, useLayoutEffect} from 'react'
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import {Avatar, Container, Typography, IconButton, Drawer, List, ListItemIcon, ListItemText, Divider, Zoom} from '@material-ui/core'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import LogoGrandeBranco from '../../../assets/images/LogoGrandeBranco.png'
import { useStyles, MenuItemTooltip, MenuItem } from './SideBar.styles.js';



const SideBar = props => {
    const {
        open, setOpen = [],
        menuItems = [],
    } = props;

    const classes = useStyles()
    const [selectedListItem, setSelectedListItem] = useState();


    //Effects

     useLayoutEffect(() => {
        const path = window.location.pathname;
        const parts = path.split('/');
    
        if (path !== '/' && parts[1].charAt(0).toUpperCase() !== menuItems[0].name) {
          const selectedItem = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
          setSelectedListItem(selectedItem)
        }
      }, [menuItems])

    //handlers


    const handleListItemClick = (event, index) => {
        setSelectedListItem(index);
    };
          
        
    const handleDrawerClose = () => {
        setOpen(false);
    };



    return (
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
            <Avatar className={classes.avatar}/>
            <Typography >Nome do Usuário</Typography>
            <IconButton onClick={handleDrawerClose} className={classes.listItemIcon} > <ChevronLeftIcon/> </IconButton>
            </div>

            <Divider />


            <Container style={{display: 'flex', justifyContent: 'center', padding: '20px 0'}}> <img className={classes.logoside} alt='Logo da OPUS' src={LogoGrandeBranco}/> </Container>

            <List component="nav">
                {menuItems.slice(0, 2).map((item, index) => (
                <React.Fragment key={item.name}>
                    <Link className={classes.link} to={item.to}>
                    <MenuItemTooltip interactive placement="right" title={open===false ? item.txtname : ''} TransitionComponent={Zoom}>
                        <MenuItem disableRipple button selected={selectedListItem === item.name} onClick={(event) => handleListItemClick(event, item.name)}>
                        <ListItemIcon className={classes.listItemIcon}>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.txtname} />
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
                    <MenuItemTooltip interactive placement="right" title={open===false ? item.txtname : ''} TransitionComponent={Zoom}>
                        <MenuItem disableRipple button selected={selectedListItem === item.name} onClick={(event) => handleListItemClick(event, item.name)}>
                        <ListItemIcon className={classes.listItemIcon}>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.txtname} />
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
                    <MenuItemTooltip interactive placement="right" title={open===false ? item.txtname : ''} TransitionComponent={Zoom}>
                        <MenuItem disableRipple button selected={selectedListItem === item.name} onClick={(event) => handleListItemClick(event, item.name)}>
                        <ListItemIcon className={classes.listItemIcon}>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.txtname} />
                        </MenuItem>
                    </MenuItemTooltip>
                    </Link>
                </React.Fragment> 
                ))}
            </List>

            <Divider />

            <Typography style={{ paddingTop: "20px" }} align="center" variant="caption" > InfOPUS </Typography>
            <Typography style={{ paddingBottom: "20px" }} align="center" variant="caption"> v1.0.0 </Typography>     



        </Drawer>
    )

}

export default SideBar