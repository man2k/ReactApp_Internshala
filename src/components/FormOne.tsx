import { Button } from "@mui/material";
import userData from "../types/formData";
import TextField from "@mui/material/TextField";

type Props = {
  formData: userData;
  setFormData: React.Dispatch<React.SetStateAction<userData>>;
};

const FormOne = ({ formData, setFormData }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <form className="flex flex-col items-start bg-emerald-400 rounded-lg p-8 w-max gap-2">
        <div className="flex flex-row w-full">
          <span className="text-xl mr-2">Name:</span>
          <TextField id="name" variant="standard" size="small" />
        </div>
        <div>
          <span className="text-xl mr-2">Phone Number:</span>
          <TextField id="phonenum" variant="standard" size="small" />
        </div>
        <div>
          <span className="text-xl mr-2">Email:</span>
          <TextField id="email" variant="standard" size="small" />
        </div>
      </form>
      <div className="mt-2">
        <Button variant="contained">Submit</Button>
      </div>
    </div>
  );
};

export default FormOne;
