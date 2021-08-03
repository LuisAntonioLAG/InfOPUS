import React, { useState } from 'react';
import { Paper } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import DescriptionIcon from '@material-ui/icons/Description';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ContactsIcon from '@material-ui/icons/Contacts';
import InfoIcon from '@material-ui/icons/Info';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PeopleIcon from '@material-ui/icons/People';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import WorkIcon from '@material-ui/icons/Work';
import FeedbackIcon from '@material-ui/icons/Feedback';

import TopBar from './TopBar/TopBar.js';
import SideBar from './SideBar/SideBar.js'
import Routes from '../../Routes.js'


import { useStyles} from './Interface.styles.js';


const Interface = (user) => {

    const classes = useStyles();

    const menuItems = [
      {txtname: 'Início', name: 'Inicio', icon: <HomeIcon/>, to:'/'},
      {txtname:'Feedback', name: 'Feedback', icon: <FeedbackIcon/>, to:'/feedback/'},
      {txtname: 'Presidência', name: 'Presidencia', icon: <LocalParkingIcon/>, to:'/presidencia/'},
      {txtname: 'Adm-Financeiro', name: 'Admfin', icon: <AccountBalanceWalletIcon/>, to: '/admfin/'},
      {txtname: 'Comercial', name: 'Comercial', icon: <MonetizationOnIcon/>, to: '/comercial/'} ,
      {txtname: 'Gente e Gestão', name: 'Gg', icon: <PeopleIcon/>, to: '/gg/'},
      {txtname: 'Marketing', name: 'Marketing', icon: <ColorLensIcon/>, to: '/marketing/'},
      {txtname: 'Projetos', name: 'Projetos', icon: <WorkIcon/>, to: '/projetos/'},
      {txtname: 'WebConferência', name: 'Meet', icon: <VideoCallIcon/>, to: '/meet/'},
      {txtname: 'Atas', name: 'Atas', icon: <DescriptionIcon/>, to: '/atas/'},
      {txtname: 'Biblioteca', name: 'Biblioteca', icon: <MenuBookIcon/>, to: '/biblioteca/'},
      {txtname: 'Contatos', name: 'Contatos', icon: <ContactsIcon/> , to: '/contatos/'},
      {txtname: 'Sobre', name: 'Sobre', icon: <InfoIcon/> , to: '/sobre/'},
    ]


    //states

    const [open, setOpen] = useState(false);



    return(
      <div className={classes.root}>

        <TopBar open={open} setOpen={setOpen}/>

        <SideBar menuItems={menuItems} open={open} setOpen={setOpen}/>

        
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