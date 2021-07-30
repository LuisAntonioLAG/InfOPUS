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
import moment from 'moment';
import 'moment/locale/pt-br';


import Interface from './components/Interface/Interface';
import { getPosts } from './actions/posts.js'



import { createTheme, responsiveFontSizes } from '@material-ui/core'
import colors from './assets/themes/colors';

const App = () => {

  const [isDarkMode, setDarkMode] = useState({DarkModeSwitch: false,});
  const [isGreenMode, setGreenMode] = useState(false);


  const theme = createTheme({
    palette: {
        type: isDarkMode.DarkModeSwitch === true ? 'dark' : 'light' ,
        primary: {
            main: isGreenMode === true ? colors.green3 : colors.blue3,
            light: isGreenMode === true ? colors.green1 : colors.blue1,
            dark: isGreenMode === true ? colors.green5 : colors.blue5,
        },
        secondary: {
            main: isGreenMode === true ? colors.blue3 : colors.green3,
            light: isGreenMode === true ? colors.blue1 : colors.green1,
            dark: isGreenMode === true ? colors.blue3 : colors.green3,
        },
    },
    typography:{
        fontFamily: [
            'Ubuntu',
            'sans-serif',
        ].join(','),
    },
});


const Theme = responsiveFontSizes(theme);


    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch])


moment.locale('pt-br');
    //states

    



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
    <ThemeProvider theme={Theme}>
    <CssBaseline />
    <Interface isDarkMode={isDarkMode} setDarkMode={setDarkMode} isGreenMode={isGreenMode} setGreenMode={setGreenMode} menuItems={menuItems} />
    </ThemeProvider>
  );
}

export default App