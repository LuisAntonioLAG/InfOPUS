import { makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    card: {
        display: "flex"
      },
      details: {
        display: "flex",
        flexDirection: "column"
      },
    
      image: {
        width: 150,
      },
      expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
          duration: theme.transitions.duration.shortest
        })
      },
      expandOpen: {
        transform: "rotate(180deg)"
      }
    }));
