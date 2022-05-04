import React from "react";
import { CheckBox } from "./index";
export default {
  title: "CheckBox",
  component: CheckBox,
};
export const Single = () => (
  <>
    <div>
      <CheckBox
        id="1"
        value="value"
        checked={true}
        onChange={(e) => console.log(e)}
      />
    </div>
  </>
);
