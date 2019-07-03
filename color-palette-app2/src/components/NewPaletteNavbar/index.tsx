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
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const NewPaletteNavbar: React.FC<{
  classes: any;
  open: boolean;
  palettes: any;
  handleSubmit: any;
  handleDrawerOpen: any;
}> = props => {
  const { classes, open, palettes, handleSubmit, handleDrawerOpen } = props;
  const [newPaletteName, changeNewPaletteName] = React.useState({
    newPaletteName: ""
  });

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
    changeNewPaletteName(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <div>
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
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
            <TextValidator
              label="Palette Name"
              name="newPaletteName"
              value={newPaletteName}
              onChange={handleChange}
              validators={["required", "PaletteNameUnique"]}
              errorMessages={["Enter Palette Name", "Name already used"]}
            />
            <Link to="../">
              <Button variant="contained" color="secondary">
                Go Back
              </Button>
            </Link>
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NewPaletteNavbar;
