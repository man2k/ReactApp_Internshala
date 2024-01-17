import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import React, { useState } from "react";
import { checkedToggle, dataStr } from "../types/types";

type Props = { data: dataStr };

const CheckboxList: React.FC<Props> = ({ data }: Props) => {
  const [expand, setExpand] = useState<checkedToggle>({});
  const [checked, setChecked] = useState<checkedToggle>({});

  const toggleExpand = (department: string) => {
    setExpand((prev: checkedToggle) => ({
      ...prev,
      [department]: !prev[department],
    }));
  };

  const toggleDepartment = (
    data: dataStr,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (data.sub_departments.length === 0) {
      setChecked((prev: checkedToggle) => ({
        ...prev,
        [data.department]: e.target.checked,
      }));
    }

    data.sub_departments.forEach((subDep) =>
      toggleSubDepartment(subDep, e.target.checked)
    );
  };

  const toggleSubDepartment = (department: string, passVal?: boolean) => {
    setChecked((prev: checkedToggle) => ({
      ...prev,
      [department]: passVal === true ? true : !prev[department],
    }));
  };

  return (
    <div className="flex flex-col font-sans">
      <div className="flex flex-row">
        {data.sub_departments.length > 0 ? (
          <button
            className="w-max"
            onClick={() => toggleExpand(data.department)}
          >
            {expand[data.department] ? (
              <ArrowDropUpRoundedIcon />
            ) : (
              <ArrowDropDownRoundedIcon />
            )}
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
          onChange={(e) => toggleDepartment(data, e)}
        />
        <div className="uppercase">{data.department.replace("_", " ")}</div>
      </div>
      <div className="flex flex-col">
        {data.sub_departments.length > 0 &&
          expand[data.department] &&
          data.sub_departments.map((subDep) => (
            <div className="flex flex-row ml-10" key={subDep}>
              <input
                type="checkbox"
                checked={checked[subDep] || false}
                onChange={() => {
                  toggleSubDepartment(subDep);
                }}
              />
              <li className="ml-2 text-base capitalize">
                {subDep.replace(/_/g, " ")}
              </li>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CheckboxList;
