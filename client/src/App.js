import React,{useState} from 'react';
import { CssBaseline } from '@material-ui/core';
import CustomThemeProvider from './assets/themes/CustomThemeProvider.js';
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
import moment from 'moment';
import 'moment/locale/pt-br';


import Interface from './components/Interface/Interface';


const App = () => {


  const [isGreenMode, setGreenMode] = useState(false);






    moment.locale('pt-br');
    //states

    


  const menuItems = [
    {txtname: 'Início', name: 'Inicio', icon: <HomeIcon/>, to:'/inicio'},
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

  return (
      <CustomThemeProvider>
      <CssBaseline />
      <Interface isGreenMode={isGreenMode} setGreenMode={setGreenMode} menuItems={menuItems} />
      </CustomThemeProvider>
  );
}

export default App