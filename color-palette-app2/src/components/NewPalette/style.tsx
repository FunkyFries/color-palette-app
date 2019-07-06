import styled from "styled-components";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { DRAWER_WIDTH } from "../constants";

export const H1 = styled("h1")`
  font-size: 1.5rem;
`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
      display: "flex",
      alignItems: "center"
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      padding: "0",
      ...theme.mixins.toolbar,
      justifyContent: "flex-end"
    },
    content: {
      flexGrow: 1,
      marginTop: "64px",
      display: "flex",
      flexWrap: "wrap",
      height: "calc(100vh - 64px)",
      padding: "0",
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -DRAWER_WIDTH
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    },
    container: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"
    },
    buttons: {
      marginBottom: "2rem",
      width: "100%"
    },
    button: {
      width: "50%"
    }
  })
);
