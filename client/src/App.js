import React,{useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
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



import { getContatos } from './actions/contatos.js';
import Interface from './components/Interface/Interface';
import * as theme from './assets/themes/themes.js';


const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getContatos());
  },[dispatch])

    //states

    const [isDarkMode, setDarkMode] = useState({DarkModeSwitch: false,});



  const menuItems = [
    {name: 'Inicio', icon: <HomeIcon/>, to:'/'},
    {name:'Feedback', icon: <FeedbackIcon/>, to:'/feedback/'},
    {name: 'Presidência', icon: <LocalParkingIcon/>, to:'/presidencia/'},
    {name: 'Adm-Financeiro', icon: <AccountBalanceWalletIcon/>, to: '/admfin/'},
    {name: 'Comercial', icon: <MonetizationOnIcon/>, to: '/comercial/'} ,
    {name: 'Gente e Gestão', icon: <PeopleIcon/>, to: '/gg/'},
    {name: 'Marketing', icon: <ColorLensIcon/>, to: '/marketing/'},
    {name: 'Projetos', icon: <WorkIcon/>, to: '/projetos/'},
    {name: 'WebConferência', icon: <VideoCallIcon/>, to: '/meet/'},
    {name: 'Atas', icon: <DescriptionIcon/>, to: '/atas/'},
    {name: 'Biblioteca', icon: <MenuBookIcon/>, to: '/biblioteca/'},
    {name: 'Contatos', icon: <ContactsIcon/> , to: '/contatos/'},
    {name: 'Informações', icon: <InfoIcon/> , to: '/info/'},
  ]

  return (
    <ThemeProvider theme={theme.BlueLight}>
    <CssBaseline />
    <Interface isDarkMode={isDarkMode} setDarkMode={setDarkMode} menuItems={menuItems} />
    </ThemeProvider>
  );
}

export default App