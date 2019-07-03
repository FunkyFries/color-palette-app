import React from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import NewPaletteNavbar from "../NewPaletteNavbar";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ChromePicker } from "react-color";
import DraggableColorList from "../DraggableColorList";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useStyles } from "./style";
import arrayMove from "array-move";
import seedPalettes from "../Helpers/seedPalettes";

export const NewPalette: React.FC<
  RouteComponentProps & { savePalette: any; palettes: any; maxColors?: number }
> = ({ maxColors = 20, ...props }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [currentColor, setColor] = React.useState("teal");
  const [colors, addColor] = React.useState(seedPalettes[0].colors);
  const [names, changeName] = React.useState({
    newName: "",
    newPaletteName: ""
  });
  const paletteIsFull = colors.length >= maxColors;

  React.useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule("isColorUnique", () => {
      return colors.every(({ color }) => color !== currentColor);
    });
  }, [colors, currentColor, props.palettes]);

  function handleDrawerClose() {
    setOpen(false);
  }

  function handleDrawerOpen() {
    setOpen(true);
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

  function handleSubmit(newPaletteName: any) {
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

  function onSortEnd({ oldIndex, newIndex }: any) {
    addColor(arrayMove(colors, oldIndex, newIndex));
  }

  function clearColors() {
    addColor([]);
  }

  function randomColor() {
    const randomPalette =
      props.palettes[Math.floor(Math.random() * props.palettes.length)];
    const randomColor =
      randomPalette.colors[
        Math.floor(Math.random() * randomPalette.colors.length)
      ];
    addColor([...colors, randomColor]);
  }

  return (
    <div className={classes.root}>
      <NewPaletteNavbar
        open={open}
        classes={classes}
        palettes={props.palettes}
        handleSubmit={handleSubmit}
        handleDrawerOpen={handleDrawerOpen}
      />
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
          <Button variant="contained" color="secondary" onClick={clearColors}>
            Clear Palette
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={randomColor}
            disabled={paletteIsFull}
          >
            {paletteIsFull ? "Palette Full" : "Random Color"}
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
            style={{ backgroundColor: paletteIsFull ? "grey" : currentColor }}
            type="submit"
            disabled={paletteIsFull}
          >
            {paletteIsFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          colors={colors}
          removeColor={removeColor}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
};
