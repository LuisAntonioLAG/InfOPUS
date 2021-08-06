import { makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.7em'
    },
    '*::-webkit-scrollbar-track': {
 
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 10,
      minHeight: 60,
    }
  },
  root: {
    display: "flex",
    fa: {
      display: 'inline-table',
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },

//---------------------------------------------------------------
  paper: {
    height: '100%',
  },
//---------------------------------------------------------------
}));
