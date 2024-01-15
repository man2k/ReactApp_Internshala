import { Button, IconButton } from "@mui/material";
import userData from "../types/formData";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";

type Props = {
  formData: userData;
  setFormData: React.Dispatch<React.SetStateAction<userData>>;
};

const FormOne = ({ formData, setFormData }: Props) => {
  const [open, setOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phoneNumber) {
      localStorage.setItem("userData", JSON.stringify(formData));
    } else {
      setOpen(true);
    }
  };

  const handleClose = (_e: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <form className="flex flex-col items-start bg-emerald-400 rounded-lg p-10 pt-2 w-max gap-2 shadow-lg">
        <label className="w-full flex text-3xl font-serif">
          <h1>Your Details</h1>
        </label>
        <div className="flex flex-row w-full">
          <span className="text-xl mr-2">Name:</span>
          <div className="w-full flex justify-end">
            <TextField
              id="name"
              required
              variant="standard"
              value={formData.name}
              size="small"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-row w-full">
          <span className="text-xl mr-2">Phone:</span>
          <div className="w-full flex justify-end">
            <TextField
              id="phoneNumber"
              required
              variant="standard"
              size="small"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-row w-full">
          <span className="text-xl mr-2">Email:</span>
          <div className="w-full flex justify-end">
            <TextField
              id="email"
              required
              variant="standard"
              size="small"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
      <div className="mt-2 shadow-lg">
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          message="Some inputs are missing."
          action={action}
        />
      </div>
    </div>
  );
};

export default FormOne;
