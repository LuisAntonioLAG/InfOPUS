import { makeStyles } from '@material-ui/core/styles';


const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        whiteSpace:'noWrap',
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        })
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      },
      menuButton: {
        marginLeft: -18,
        marginRight: 36
      },
      small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        margin: '0 auto',
      },
      hide: {
        display: "none"
      },
}))


