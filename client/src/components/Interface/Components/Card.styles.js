import { makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    cardIcon: {
        fontSize: '5em',
         margin: 'auto',
     },
     fullWidth: {
        whiteSpace: 'nowrap',
        width: '100%',
     },
     dropOptions: {
         width: '20%'
     },
     pdfIcon: {
        marginLeft: 5,
        color: '#F40F02'
    },
    wordIcon: {
        marginLeft: 5,
        color: '#2a5599'
    },
    excelIcon: {
        marginLeft: 5,
        color: '#1D6F42'
    },
    pptIcon: {
        marginLeft: 5,
        color: '#D04423'
    }


    
}));