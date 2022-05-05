import React from "react";
import { CheckBox, CheckBoxProps } from "../CheckBox";
import "./style.css";

export type CheckBoxFilterProps = {
  checkboxes: CheckBoxProps[];
};

export const CheckBoxFilter = ({ checkboxes }: CheckBoxFilterProps) => {
  return (
    <div className="container">
      {checkboxes.map((checkbox, i) => (
        <CheckBox key={i} {...checkbox} />
      ))}
    </div>
  );
};
