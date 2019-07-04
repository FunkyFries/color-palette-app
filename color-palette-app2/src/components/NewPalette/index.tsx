import React from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import NewPaletteNavbar from "../NewPaletteNavbar";
import ColorPickerForm from "../ColorPickerForm";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DraggableColorList from "../DraggableColorList";
import { useStyles } from "./style";
import arrayMove from "array-move";
import seedPalettes from "../Helpers/seedPalettes";

export const NewPalette: React.FC<
  RouteComponentProps & { savePalette: any; palettes: any; maxColors?: number }
> = ({ maxColors = 20, ...props }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [colors, addColor] = React.useState(seedPalettes[0].colors);

  const { palettes, savePalette } = props;
  const paletteIsFull = colors.length >= maxColors;

  function handleDrawerClose() {
    setOpen(false);
  }

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleAddColor(newColor: any) {
    addColor([...colors, newColor]);
  }

  function handleSubmit(newPaletteName: any) {
    const newPalette = {
      paletteName: newPaletteName,
      colors: colors,
      id: newPaletteName.toLowerCase().replace(/ /g, "-")
    };
    savePalette(newPalette);
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
              disabled={paletteIsFull}
              className={classes.button}
            >
              {paletteIsFull ? "Palette Full" : "Random Color"}
            </Button>
          </div>
          <ColorPickerForm
            paletteIsFull={paletteIsFull}
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
        />
      </main>
    </div>
  );
};
