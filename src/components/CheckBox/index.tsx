import React, { ChangeEvent } from "react";
import "./CheckBox.css";

export type CheckBoxProps = {
  id: string;
  value: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const CheckBox = ({ id, value, checked, onChange }: CheckBoxProps) => {
  return (
    <div className="checkbox">
      <input
        id={id}
        type="checkbox"
        name="checkbox"
        checked={checked}
        onChange={onChange}
        value={value}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};
