import { makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    imageContainer: {
        height: 285,    
        margin: 'auto',
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 40
    },
    actionButtons: {
        display: 'flex',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'flex-end',
        flex: '0 0 auto'
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        zIndex: 1  
    }




}));