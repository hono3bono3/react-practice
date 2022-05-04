import React, { ChangeEventHandler } from "react";

type CheckBoxProps = {
  id: string;
  value: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const CheckBox: React.FC<CheckBoxProps> = ({
  id,
  value,
  checked,
  onChange,
}) => {
  return (
    <div>
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
