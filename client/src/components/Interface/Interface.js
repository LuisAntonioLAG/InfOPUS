import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHome, faWallet, faHandHoldingUsd, faUsers, faAddressCard } from '@fortawesome/free-solid-svg-icons'
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
      {txtname: 'Contatos', name: 'Contatos', icon: <FontAwesomeIcon size='lg' fixedWidth icon={faAddressCard}/> , to: '/contatos/'},
      {txtname: 'Sobre', name: 'Sobre', icon: <InfoIcon/> , to: '/sobre/'},
    ]

    const breadcrumbNameMap = {
      '/feedback': 'Feedback',
      '/presidencia': 'Presidência',
      '/admfin': 'Adm-Financeiro',
      '/comercial': 'Comercial',
      '/gg': 'Gente e Gestão',
      '/marketing': 'Marketing',
      '/projetos': 'Projetos ',
      '/contatos': 'Contatos',
      '/sobre': 'Sobre',
    };

    //states

    const [open, setOpen] = useState(false);



    return(
      <div className={classes.root}>

        <TopBar open={open} setOpen={setOpen} menuItems={menuItems} breadcrumbNameMap={breadcrumbNameMap}/>

        <SideBar menuItems={menuItems} open={open} setOpen={setOpen} breadcrumbNameMap={breadcrumbNameMap}/>

        
        <main className={classes.content}>
          <div className={classes.toolbar} />
                <Routes/>
        </main>
      </div>
    );
}

export default Interface