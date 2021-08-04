import { makeStyles } from '@material-ui/core/styles';



import LoginImage from '../../assets/images/LoginImage.JPG'



export const useStyles = makeStyles((theme) => ({

    root: {
        height: '100vh',
      },
      image: {
        backgroundImage: `url(${LoginImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      logoContainer: {
        display: 'flex', 
        justifyContent: 'center', 
        padding: '20px 0'   
      },
      logo: {
        margin: theme.spacing(1),
        width: theme.spacing(5),    
      },
      form: {
        width: '50%',
        [theme.breakpoints.only("md")]: {
          width: '70%',
        },
        [theme.breakpoints.down("sm")]: {
          width: '90%',
        },
      },
      submit: {
        margin: theme.spacing(3, 0, 0),
      },
      
      




}))

