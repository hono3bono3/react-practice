import React, { ChangeEventHandler } from "react";
import styles from "./CheckBox.module.css";

type CheckBoxProps = {
  id: string;
  value: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const CheckBox = ({ id, value, checked, onChange }: CheckBoxProps) => {
  return (
    <div className={styles.title}>
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
