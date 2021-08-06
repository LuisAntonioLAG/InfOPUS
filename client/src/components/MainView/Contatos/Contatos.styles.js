import { makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({


    root: {
        flexGrow: 1
      },

      titleIcon: {
        marginRight: 15,
        fontSize: '44.5px',
        color: theme.palette.secondary.main
    },

    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
    container: {
      display: 'flex',
    },
    center: {
      margin: 'auto'
    },








}));