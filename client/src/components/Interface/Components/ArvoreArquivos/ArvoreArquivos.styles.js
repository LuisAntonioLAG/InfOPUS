import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  folderIcon: {
    color: "#F8D775"
  },
  zipIcon: {
    color: theme.palette.type === "light" && "#920159",
    background: theme.palette.type === "dark" && "#920159"
  },
  pdfIcon: {
    color: theme.palette.type === "light" && "#F40F02",
    background: theme.palette.type === "dark" && "#F40F02"
  },
  wordIcon: {
    color: theme.palette.type === "light" && "#2a5599",
    background: theme.palette.type === "dark" && "#2a5599"
  },
  excelIcon: {
    color: theme.palette.type === "light" && "#1D6F42",
    background: theme.palette.type === "dark" && "#1D6F42"
  },
  pptIcon: {
    color: theme.palette.type === "light" && "#D04423",
    background: theme.palette.type === "dark" && "#D04423"
  },
  imageIcon: {
    color: theme.palette.type === "light" && "#FE6B8B",
    background: theme.palette.type === "dark" && "#FE6B8B"
  },
  videoIcon: {
    color: theme.palette.type === "light" && "teal",
    background: theme.palette.type === "dark" && "teal"
  },
  audioIcon: {
    color: theme.palette.type === "light" && "seagreen",
    background: theme.palette.type === "dark" && "seagreen"
  },
  cadIcon: {
    height: "inherit",
    width: "inherit"
  },
  revitIcon: {
    height: "inherit",
    width: "inherit"
  }
}));
