import { makeStyles, alpha} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.7em',
      padding: '20px'
    },
    '*::-webkit-scrollbar-track': {
 
      backgroundColor: alpha(theme.palette.primary.dark, 0.30),
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.secondary.main,
      minHeight: 60,
    }
  },
  root: {
    display: "flex",
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
