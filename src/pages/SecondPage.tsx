import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";
import SecondComponent from "../components/SecondComponent";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

const SecondPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("userData") === null) {
      handleClickOpen();
    }
  }, []);

  const proceed = () => {
    navigate("/");
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <main className="w-full h-screen mx-auto bg-emerald-500 font-mono overflow-scroll flex flex-col">
      {sessionStorage.getItem("userData") ? (
        <>
          <Table />
          <SecondComponent />
        </>
      ) : (
        <></>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Please fill up the form to proceed.
        </DialogTitle>

        <DialogActions>
          <button
            className="bg-blue-300 rounded-xl p-1 pr-2"
            onClick={proceed}
            autoFocus
          >
            Ok
          </button>
        </DialogActions>
      </Dialog>
    </main>
  );
};

export default SecondPage;
