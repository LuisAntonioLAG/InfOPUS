import { createTheme, responsiveFontSizes } from '@material-ui/core'



const BlueLight = createTheme({
    palette: {
        type:'dark',
        primary: {
            main: '#19a2b1',
            light: '#23e7fc',
            dark: '#106770',
        },
        secondary: {
            main: '#8cc640',
            light: '#95d444',
            dark: '#324717',
        },
    },
    typography:{
        fontFamily: [
            'Ubuntu',
            'sans-serif',
        ].join(','),
    },
    
});


export const BlueLightTheme = responsiveFontSizes(BlueLight);


const GreenLight = createTheme({
    palette: {
        type:'dark',
        primary: {
            main: '#8cc640',
            light: '#95d444',
            dark: '#324717',
        },
        secondary: {
            main: '#19a2b1',
            light: '#23e7fc',
            dark: '#106770',
        }
    },
    typography:{
        fontFamily: [
            'Ubuntu',
            'sans-serif',
        ].join(','),
    },
});


export const GreenLightTheme = responsiveFontSizes(GreenLight);
