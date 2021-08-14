import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
    listRoot: {
        width: '100%',
      },
      margin: {
        width: '100%',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    checkboxMargin: {
        marginRight: -20
    }
}));