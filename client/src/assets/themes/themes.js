import { createTheme, responsiveFontSizes } from '@material-ui/core'
import colors from './colors';

const BlueLightTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: colors.green3,
            light: colors.green1,
            dark: colors.green5 ,
        },
        secondary: {
            main: colors.blue3,
            light: colors.blue1,
            dark: colors.blue5 ,
        },
    },
    typography:{
        fontFamily: [
            'Ubuntu',
            'sans-serif',
        ].join(','),
    },
});

export const blueLightTheme = responsiveFontSizes(BlueLightTheme);


const BlueDarkTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: colors.green3,
            light: colors.green1,
            dark: colors.green5 ,
        },
        secondary: {
            main: colors.blue3,
            light: colors.blue1,
            dark: colors.blue5 ,
        },
    },
    typography:{
        fontFamily: [
            'Ubuntu',
            'sans-serif',
        ].join(','),
    },
});

export const blueDarkTheme = responsiveFontSizes(BlueDarkTheme);

