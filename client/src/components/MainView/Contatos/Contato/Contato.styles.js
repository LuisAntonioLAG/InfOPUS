import { makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    card: {
        display: "flex"
      },
      details: {
        display: "flex",
        flexDirection: "column"
      },
    
      imageContainer: {
        height: 200,
        width: 150
      },

      image: {
        maxHeight: '100%',
        maxWidth: '100%'
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
