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
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const NewPaletteNavbar: React.FC<{
  open: boolean;
  palettes: any;
  handleSubmit: any;
  handleDrawerOpen: any;
}> = props => {
  const classes = useStyles();
  const { open, palettes, handleSubmit, handleDrawerOpen } = props;
  const [paletteName, changeNewPaletteName] = React.useState("");

  React.useEffect(() => {
    ValidatorForm.addValidationRule("PaletteNameUnique", value => {
      return palettes.every(
        ({ paletteName }: { paletteName: string }) =>
          paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }, [palettes]);

  function handleChange(e: any) {
    e.persist();
    changeNewPaletteName(e.target.value);
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
          <ValidatorForm onSubmit={() => handleSubmit(paletteName)}>
            <TextValidator
              label="Palette Name"
              name="newPaletteName"
              value={paletteName}
              onChange={handleChange}
              validators={["required", "PaletteNameUnique"]}
              errorMessages={["Enter Palette Name", "Name already used"]}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </ValidatorForm>
          <Link to="../">
            <Button variant="contained" color="secondary">
              Go Back
            </Button>
          </Link>
        </div>
      </AppBar>
    </div>
  );
};

export default NewPaletteNavbar;
