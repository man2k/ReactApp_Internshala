import { Button, IconButton } from "@mui/material";
import { UserData } from "../types/types";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type Props = {
  formData: UserData;
  setFormData: React.Dispatch<React.SetStateAction<UserData>>;
};

const FirstComponent = ({ formData, setFormData }: Props) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const data = id === "phoneNumber" ? value.replace(/[^0-9]/g, "") : value;
    setFormData({ ...formData, [id]: data });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { name, email, phoneNumber } = formData;
    if (name && email && phoneNumber) {
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate("/second");
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
      <form className="flex flex-col items-start bg-emerald-400 rounded-lg p-12 pt-5 w-max gap-2 shadow-lg">
        <label className="w-full flex text-4xl font-sans mb-2 justify-center">
          <h1>Your Details</h1>
        </label>
        <div className="flex flex-row w-full">
          <span className="text-xl mr-2">Name:</span>
          <div className="w-full flex justify-end">
            <TextField
              id="name"
              required
              type="text"
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
              type="tel"
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
              type="email"
              variant="standard"
              size="small"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mt-4 w-full">
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
      </form>
    </div>
  );
};

export default FirstComponent;
