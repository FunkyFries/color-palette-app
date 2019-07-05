import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

const PaletteMetaForm: React.FC<{
  palettes: any;
  handleSubmit: any;
  hideForm: any;
}> = props => {
  const { palettes, handleSubmit, hideForm } = props;
  const [stage, updateStage] = React.useState("form");
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

  function showEmojiPicker() {
    updateStage("emoji");
  }

  function savePalette(emoji: any) {
    const newPalette = { paletteName: paletteName, emoji: emoji.native };
    handleSubmit(newPalette);
  }

  return (
    <>
      <Dialog
        open={stage === "form"}
        onClose={hideForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new palette. Make sure it's unique!
            </DialogContentText>
            <TextValidator
              autoComplete="off"
              fullWidth
              margin="normal"
              label="Palette Name"
              name="newPaletteName"
              value={paletteName}
              onChange={handleChange}
              validators={["required", "PaletteNameUnique"]}
              errorMessages={["Enter Palette Name", "Name already used"]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={hideForm} color="primary">
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
      <Dialog open={stage === "emoji"} onClose={hideForm}>
        <DialogTitle id="emoji-dialog-title">
          Choose a Palette Emoji
        </DialogTitle>
        <Picker
          onSelect={savePalette}
          title="Pick a Palette Emoji"
          exclude={["recent"]}
        />
      </Dialog>
    </>
  );
};

export default PaletteMetaForm;
