import React from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import arrayMove from "array-move";
import NewPaletteNavbar from "../NewPaletteNavbar";
import ColorPickerForm from "../ColorPickerForm";
import DraggableColorList from "../DraggableColorList";
import { useStyles } from "./style";
import seedPalettes from "../Helpers/seedPalettes";

const NewPalette: React.FC<
  RouteComponentProps & { savePalette: any; palettes: any; maxColors?: number }
> = ({ maxColors = 20, ...props }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [colors, addColor] = React.useState(seedPalettes[0].colors);

  const { palettes, savePalette } = props;
  const paletteisfull = colors.length >= maxColors;

  function handleDrawerClose() {
    setOpen(false);
  }

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleAddColor(newColor: any) {
    addColor([...colors, newColor]);
  }

  function handleSubmit(newPalette: any) {
    const palette = {
      paletteName: newPalette.paletteName,
      colors: colors,
      id: newPalette.paletteName.toLowerCase().replace(/ /g, "-"),
      emoji: newPalette.emoji
    };
    savePalette(palette);
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
    const randomPalette = palettes[Math.floor(Math.random() * palettes.length)];
    let randomColor: any;
    let isDuplicateColor = true;
    const randomIndex = () =>
      Math.floor(Math.random() * randomPalette.colors.length);
    const duplicateChecker = () =>
      colors.some(color => color.name === randomColor.name);
    while (isDuplicateColor) {
      randomColor = randomPalette.colors[randomIndex()];
      isDuplicateColor = duplicateChecker();
    }
    addColor([...colors, randomColor]);
  }

  return (
    <div className={classes.root}>
      <NewPaletteNavbar
        open={open}
        palettes={palettes}
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
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="secondary"
              onClick={clearColors}
              className={classes.button}
            >
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={randomColor}
              disabled={paletteisfull}
              className={classes.button}
            >
              {paletteisfull ? "Palette Full" : "Random Color"}
            </Button>
          </div>
          <ColorPickerForm
            paletteisfull={paletteisfull}
            handleAddColor={handleAddColor}
            palettes={palettes}
            colors={colors}
          />
        </div>
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
          distance={20}
        />
      </main>
    </div>
  );
};

export default NewPalette;
