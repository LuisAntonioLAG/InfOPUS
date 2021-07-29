import { makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    root: {
        width: '100%',
    },
    titleIcon: {
        marginRight: 15,
    },
    accordion: {
        backgroundColor: theme.palette.secondary.main,
        boxShadow: theme.shadows[4],
    },
      heading: {
        color: theme.palette.primary.contrastText,
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },

//---------------------------------------------------------------
      link: {
        textDecoration: 'none', 
        color: theme.palette.primary.main
      },
    }));