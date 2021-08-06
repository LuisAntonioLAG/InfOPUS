import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHome, faWallet, faHandHoldingUsd, faUsers, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import DescriptionIcon from '@material-ui/icons/Description';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import InfoIcon from '@material-ui/icons/Info';
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
      {txtname: 'Início', name: 'Inicio', icon: <FontAwesomeIcon size='lg' fixedWidth icon={faHome}/>, to:'/'},
      {txtname:'Feedback', name: 'Feedback', icon: <FeedbackIcon/>, to:'/feedback/'},
      {txtname: 'Presidência', name: 'Presidencia', icon: <LocalParkingIcon/>, to:'/presidencia/'},
      {txtname: 'Adm-Financeiro', name: 'Admfin', icon: <FontAwesomeIcon size='lg' fixedWidth icon={faWallet}/>, to: '/admfin/'},
      {txtname: 'Comercial', name: 'Comercial', icon: <FontAwesomeIcon size='lg' fixedWidth icon={faHandHoldingUsd}/>, to: '/comercial/'} ,
      {txtname: 'Gente e Gestão', name: 'Gg', icon: <FontAwesomeIcon size='lg' fixedWidth icon={faUsers}/>, to: '/gg/'},
      {txtname: 'Marketing', name: 'Marketing', icon: <ColorLensIcon/>, to: '/marketing/'},
      {txtname: 'Projetos', name: 'Projetos', icon: <WorkIcon/>, to: '/projetos/'},
      {txtname: 'WebConferência', name: 'Meet', icon: <VideoCallIcon/>, to: '/meet/'},
      {txtname: 'Atas', name: 'Atas', icon: <DescriptionIcon/>, to: '/atas/'},
      {txtname: 'Biblioteca', name: 'Biblioteca', icon: <MenuBookIcon/>, to: '/biblioteca/'},
      {txtname: 'Contatos', name: 'Contatos', icon: <FontAwesomeIcon size='lg' fixedWidth icon={faAddressCard}/> , to: '/contatos/'},
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
            <Paper className={classes.paper} elevation={3}>
                <Routes/>
            </Paper>
        </main>
      </div>
    );
}

export default Interface