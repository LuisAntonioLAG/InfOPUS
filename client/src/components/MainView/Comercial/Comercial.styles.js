import { makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({


    root: {
        flexGrow: 1
      },
    titleIcon: {
        marginRight: 15,
    },
    cardIcon: {
       fontSize: '5em',
        margin: 'auto',
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        zIndex: 1
      },
    fullWidth: {
        width:'100%',
    },
}));