import { makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    cardIcon: {
        fontSize: '5em',
         margin: 'auto',
     },
     zipIcon: {
         marginLeft: 5, 
         color: theme.palette.type === 'light' && ('#920159'),
         background: theme.palette.type === 'dark' && ('#920159'),
     },
     uploadIcon: {
        position:'absolute',
        right: -1,
        top: -7,
        marginleft: '20px',
    },
    expand: {
        transform: "rotate(0deg)",
        transition: theme.transitions.create("transform", {
          duration: theme.transitions.duration.shortest
        })
      },
      expandOpen: {
        transform: "rotate(180deg)"
      },



    }));