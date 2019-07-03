import React from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const ColorPickerForm: React.FC<{
  paletteIsFull: boolean;
  handleAddColor: any;
  palettes: any;
  colors: {
    name: string;
    color: string;
  }[];
}> = props => {
  const { paletteIsFull, handleAddColor, palettes, colors } = props;
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

  return (
    <div>
      <ChromePicker color={currentColor} onChangeComplete={handleColorChange} />
      <ValidatorForm onSubmit={handleSubmit} instantValidate={false}>
        <TextValidator
          name="newName"
          value={newColorName}
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
    </div>
  );
};

export default ColorPickerForm;
