import { Card } from "@mui/material";
import DepartmentList from "../assets/Departmentlist.json";
import CheckboxList from "./CheckboxList";

const SecondComponent: React.FC = () => {
  return (
    <div className="w-full mx-auto px-11 pb-10">
      <label className="text-3xl">Select Your Position</label>
      <Card className="px-10 py-2 pl-2">
        <ul className="flex flex-col">
          {DepartmentList.map((data) => (
            <CheckboxList data={data} key={data.department} />
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default SecondComponent;
