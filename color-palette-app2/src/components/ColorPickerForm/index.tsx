import React from "react";
import { ChromePicker } from "react-color";
import { ValidatorForm } from "react-material-ui-form-validator";
import { AddColorButton, ColorNameInput } from "./style";

const ColorPickerForm: React.FC<{
  paletteisfull: boolean;
  handleAddColor: any;
  palettes: any;
  colors: {
    name: string;
    color: string;
  }[];
}> = props => {
  const { paletteisfull, handleAddColor, palettes, colors } = props;
  const [currentColor, setColor] = React.useState("teal");
  const [newColorName, changeName] = React.useState("");

  React.useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule("isColorUnique", () => {
      return colors.every(({ color }) => color !== currentColor);
    });
  }, [colors, currentColor, palettes]);

  function handleColorChange(newColor: any) {
    setColor(newColor.hex);
  }

  function handleChange(e: any) {
    e.persist();
    changeName(e.target.value);
  }

  function handleSubmit() {
    const newColor = {
      name: newColorName,
      color: currentColor
    };
    handleAddColor(newColor);
    changeName("");
  }

  const addcolortext = paletteisfull ? "Palette Full" : "Add Color";

  return (
    <div>
      <ChromePicker
        color={currentColor}
        onChangeComplete={handleColorChange}
        width="100%"
      />
      <ValidatorForm onSubmit={handleSubmit} instantValidate={false}>
        <ColorNameInput
          autoComplete="off"
          variant="filled"
          margin="normal"
          name="newName"
          value={newColorName}
          placeholder="Color Name"
          onChange={handleChange}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "this field is required",
            "Color name must be unique",
            "Color must be unique"
          ]}
        />
        <AddColorButton
          variant="contained"
          color="primary"
          currentcolor={currentColor}
          type="submit"
          disabled={paletteisfull}
        >
          {addcolortext}
        </AddColorButton>
      </ValidatorForm>
    </div>
  );
};

export default ColorPickerForm;
