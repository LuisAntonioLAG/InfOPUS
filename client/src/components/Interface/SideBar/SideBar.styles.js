import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Tooltip, ListItem, Hidden } from '@material-ui/core'

const drawerWidth = 240;

export const MenuItemTooltip = withStyles((theme) => ({

  tooltip: {
    backgroundColor: theme.palette.secondary.main,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 12,
  },
}))(Tooltip);

export const MenuItem = withStyles((theme) => ({

  root: {
    overflowX:'hidden',
    "&$selected": {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.secondary.main,
      "& .MuiListItemIcon-root": {
        color: theme.palette.secondary.main
      }
    },
    "&$selected:hover": {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.secondary.main,
      "& .MuiListItemIcon-root": {
        color: theme.palette.secondary.main
      }
    },
    "&:hover": {
      color: theme.palette.secondary.contrastText,
      "& .MuiListItemIcon-root": {
        color: theme.palette.secondary.contrastText
      }
    }
  },
  selected: {},
}))(ListItem);

export const useStyles = makeStyles((theme) => ({

    hide: {
        display: "none"
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
      },
      drawerOpen: {
        width: drawerWidth,
        background: theme.palette.primary.main,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      },
      drawerClose: {
        background: theme.palette.primary.main,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("md")]: {
          width: theme.spacing(8) + 1
        }
      },
      toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3)
      },
      drawerContainer: {
        overflowX: 'hidden',
      },
      drawerPaper: {
        width: '80%',
        background: theme.palette.primary.main,
      },

    //------------------
    logoside: {
        width: 30,
      },
  
  
      link: {
        textDecoration: 'none', 
        color: 'inherit'
      },
  
      listItemIcon: {
        color: 'inherit'
      },

}))