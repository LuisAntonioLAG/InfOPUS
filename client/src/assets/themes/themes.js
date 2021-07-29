import { createTheme } from '@material-ui/core'


export const BlueLight = createTheme({
    palette: {
        type:'dark',
        primary: {
            main: '#19a2b1',
            light: '#23e7fc',
            dark: '#106770',
            contrastText: 'black'
        },
        secondary: {
            main: '#8cc640',
            light: '#95d444',
            dark: '#324717',
            contrastText: 'white'
        }
    }
});

export const GreenLight = createTheme({
    palette: {
        type:'light',
        primary: {
            main: '#8cc640',
            light: '#95d444',
            dark: '#324717',
            contrastText: 'black'
        },
        secondary: {
            main: '#19a2b1',
            light: '#23e7fc',
            dark: '#106770',
            contrastText: 'white'
        }
    },
    typography:{
        fontFamily: [
            'Ubuntu',
            'sans-serif',
        ].join(','),
    },
});
