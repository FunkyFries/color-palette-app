import React from "react";
import { Link } from "@reach/router";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./style";
import PaletteMetaForm from "../PaletteMetaForm";

const NewPaletteNavbar: React.FC<{
  open: boolean;
  palettes: any;
  handleSubmit: any;
  handleDrawerOpen: any;
}> = props => {
  const classes = useStyles();
  const { open, palettes, handleSubmit, handleDrawerOpen } = props;
  const [formShowing, toggleForm] = React.useState(false);

  function handleClick() {
    toggleForm(prev => {
      return !prev;
    });
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create A Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to="../">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Go Back
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
            className={classes.button}
          >
            Save
          </Button>
        </div>
      </AppBar>
      {formShowing && (
        <PaletteMetaForm
          palettes={palettes}
          handleSubmit={handleSubmit}
          hideForm={handleClick}
        />
      )}
    </div>
  );
};

export default NewPaletteNavbar;
