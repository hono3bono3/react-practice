import React from "react";
import { CheckBoxFilter, CheckBoxFilterProps } from "./index";

export default {
  title: "CheckBoxFilter",
  component: CheckBoxFilter,
};
const props: CheckBoxFilterProps = {
  checkboxes: [
    { id: "1", value: "value1", checked: true, onChange: () => {} },
    { id: "2", value: "value2", checked: true, onChange: () => {} },
    { id: "3", value: "value3", checked: true, onChange: () => {} },
    { id: "4", value: "value4", checked: true, onChange: () => {} },
    { id: "5", value: "value5", checked: true, onChange: () => {} },
    { id: "6", value: "value6", checked: true, onChange: () => {} },
    { id: "7", value: "value7", checked: true, onChange: () => {} },
    { id: "8", value: "value8", checked: true, onChange: () => {} },
  ],
};
export const Basic = () => (
  <div>
    <CheckBoxFilter {...props} />
  </div>
);
