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
     pdfIcon: {
        marginLeft: 5,
        color: theme.palette.type === 'light' && ('#F40F02'),
        background: theme.palette.type === 'dark' && ('#F40F02'),
    },
    wordIcon: {
        marginLeft: 5,
        color: theme.palette.type === 'light' && ('#2a5599'),
        background: theme.palette.type === 'dark' && ('#2a5599'),
    },
    excelIcon: {
        marginLeft: 5,
        color: theme.palette.type === 'light' && ('#1D6F42'),
        background: theme.palette.type === 'dark' && ('#1D6F42'),
    },
    pptIcon: {
        marginLeft: 5,
        color: theme.palette.type === 'light' && ('#D04423'),
        background: theme.palette.type === 'dark' && ('#D04423'),
    },
    imageIcon: {
        marginLeft: 5,
        color: theme.palette.type === 'light' && ('#FE6B8B'),
        background: theme.palette.type === 'dark' && ('#FE6B8B'),
    },
    videoIcon: {
        marginLeft: 5,
        color: theme.palette.type === 'light' && ('teal'),
        background: theme.palette.type === 'dark' && ('teal'),
    },
    audioIcon: {
        marginLeft: 5,
        color: theme.palette.type === 'light' && ('seagreen'),
        background: theme.palette.type === 'dark' && ('seagreen'),
    },
    uploadIcon: {
        position:'absolute',
        right: -1,
        top: -7,
        marginleft: '20px',
    },
    cadIcon: {
        
        height: 'inherit',
        width: 'inherit',
        marginLeft: 2,
      },
      revitIcon: {
        height: 'inherit',
        width: 'inherit',
        marginLeft: -2,
      },
      iconRoot: {
        
        position: 'relative',
        top: 4
      }


    
}));