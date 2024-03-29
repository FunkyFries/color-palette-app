import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { DRAWER_WIDTH, sizes } from "../constants";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: "64px"
    },
    appBarShift: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    hide: {
      display: "none"
    },
    navBtns: {
      marginRight: "1rem",
      "& a": {
        textDecoration: "none"
      },
      [sizes.down("xs")]: {
        "& button": { padding: "0 0.3rem", margin: "0.1rem" }
      }
    },
    button: {
      margin: "0 0.5rem"
    }
  })
);
