import { UserData } from "../types/types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  formData: UserData;
  setFormData: React.Dispatch<React.SetStateAction<UserData>>;
};

const FirstComponent = ({ formData, setFormData }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>("Some inputs are missing.");

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const finalData =
      id === "phoneNumber" ? value.replace(/[^0-9]/g, "") : value;
    setFormData({ ...formData, [id]: finalData });
  };

  const validateEmail = (email: string) => {
    let reg = /\S+@\S+\.\S+/;
    return reg.test(email);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { name, email, phoneNumber } = formData;
    if (name && email && phoneNumber) {
      if (!validateEmail(email)) {
        setErrMsg("Email is invalid.");
        return setOpen(true);
      }
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate("/second");
    } else {
      setErrMsg("Some inputs are missing.");
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
            message={errMsg}
            action={action}
          />
        </div>
      </form>
    </div>
  );
};

export default FirstComponent;
