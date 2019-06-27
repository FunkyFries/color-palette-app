import React from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ChromePicker } from "react-color";
import DraggableColorBox from "../DraggableColorBox/index";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useStyles } from "./style";

export const NewPalette: React.FC<
  RouteComponentProps & { savePalette: any; palettes: any }
> = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [currentColor, setColor] = React.useState("teal");
  const [colors, addColor] = React.useState([
    { name: "purple", color: "purple" },
    { name: "Salmon", color: "#e15764" }
  ]);
  const [names, changeName] = React.useState({
    newName: "",
    newPaletteName: ""
  });

  React.useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule("isColorUnique", () => {
      return colors.every(({ color }) => color !== currentColor);
    });

    ValidatorForm.addValidationRule("PaletteNameUnique", value => {
      return props.palettes.every(
        ({ paletteName }: { paletteName: string }) =>
          paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }, [colors, currentColor, props.palettes]);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function handleColorChange(newColor: any) {
    setColor(newColor.hex);
  }

  function handleAddColor() {
    const newColor = {
      name: names.newName,
      color: currentColor
    };
    addColor([...colors, newColor]);
    changeName(prev => ({
      ...prev,
      newName: ""
    }));
  }

  function handleChange(e: any) {
    e.persist();
    changeName(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  function handleSubmit() {
    const { newPaletteName } = names;
    const newPalette = {
      paletteName: newPaletteName,
      colors: colors,
      id: newPaletteName.toLowerCase().replace(/ /g, "-")
    };
    props.savePalette(newPalette);
    navigate("../");
  }

  function removeColor(colorName: string) {
    addColor(colors.filter(color => color.name !== colorName));
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
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              label="Palette Name"
              name="newPaletteName"
              value={names.newPaletteName}
              onChange={handleChange}
              validators={["required", "PaletteNameUnique"]}
              errorMessages={["Enter Palette Name", "Name already used"]}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
          <Button variant="contained" color="secondary">
            Clear Palette
          </Button>
          <Button variant="contained" color="primary">
            Random Color
          </Button>
        </div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={handleColorChange}
        />
        <ValidatorForm onSubmit={handleAddColor} instantValidate={false}>
          <TextValidator
            name="newName"
            value={names.newName}
            onChange={handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "this field is required",
              "Color name must be unique",
              "Color must be unique"
            ]}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: currentColor }}
            type="submit"
          >
            Add Color
          </Button>
        </ValidatorForm>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {colors.map(c => (
          <DraggableColorBox
            color={c.color}
            name={c.name}
            key={c.name}
            handleClick={removeColor}
          />
        ))}
      </main>
    </div>
  );
};
