import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import React, { useState } from "react";

interface dataStr {
  department: string;
  sub_departments: string[];
}

type Props = { data: dataStr };

const CheckboxList: React.FC<Props> = ({ data }: Props) => {
  const [expand, setExpand] = useState<any>({});
  const [checked, setChecked] = useState<any>({});

  const handleToggleExpand = (department: string) => {
    setExpand((prev: any) => ({
      ...prev,
      [department]: !prev[department],
    }));
  };

  const handleDepToggle = (
    data: dataStr,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (data.sub_departments.length === 0) {
      setChecked((prev: any) => {
        console.log(prev[data.department]);
        return {
          ...prev,
          [data.department]: e.target.checked,
        };
      });
    }

    data.sub_departments.forEach((subdep) =>
      handleSubDepToggle(subdep, e.target.checked)
    );
  };

  const handleSubDepToggle = (department: string, passVal?: boolean) => {
    if (passVal === true) {
      // toggle through parent
      return setChecked((prev: any) => ({
        ...prev,
        [department]: true,
      }));
    }

    setChecked((prev: any) => ({ ...prev, [department]: !prev[department] }));
  };

  return (
    <div className="flex flex-col font-sans">
      <div className="flex flex-row">
        {data.sub_departments.length > 0 ? (
          <button
            className="w-max"
            onClick={() => handleToggleExpand(data.department)}
          >
            <ArrowDropDownRoundedIcon />
          </button>
        ) : (
          <div className="ml-6"></div>
        )}
        <input
          type="checkbox"
          className="mr-2"
          checked={
            (data.sub_departments.length > 0
              ? data.sub_departments.reduce(
                  (prevVal, curVal) => prevVal && checked[curVal],
                  true
                )
              : false) ||
            checked[data.department] ||
            false
          }
          onChange={(e) => handleDepToggle(data, e)}
        />
        <div className="uppercase">{data.department.replace("_", " ")}</div>
      </div>
      <div className="flex flex-col">
        {data.sub_departments.length > 0 && expand[data.department] ? (
          data.sub_departments.map((subdep) => (
            <div className="flex flex-row ml-10" key={subdep}>
              <input
                type="checkbox"
                checked={checked[subdep] || false}
                onChange={() => {
                  handleSubDepToggle(subdep);
                }}
              />
              <li className="ml-2 text-base capitalize">
                {subdep.replace(/_/g, " ")}
              </li>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CheckboxList;
