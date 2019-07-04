import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const PaletteMetaForm: React.FC<{
  palettes: any;
  handleSubmit: any;
}> = props => {
  const { palettes, handleSubmit } = props;
  const [open, setOpen] = React.useState(false);
  const [paletteName, changeNewPaletteName] = React.useState("");

  React.useEffect(() => {
    ValidatorForm.addValidationRule("PaletteNameUnique", value => {
      return palettes.every(
        ({ paletteName }: { paletteName: string }) =>
          paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }, [palettes]);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleChange(e: any) {
    e.persist();
    changeNewPaletteName(e.target.value);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PaletteMetaForm;
