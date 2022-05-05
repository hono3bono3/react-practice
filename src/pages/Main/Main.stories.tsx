import React from "react";
import { Main, MainProps } from "./index";

export default {
  title: "Main",
  component: Main,
};
const props: MainProps = {
  prefectures: [
    { id: "1", value: "value1" },
    { id: "2", value: "value2" },
    { id: "3", value: "value3" },
    { id: "4", value: "value4" },
    { id: "5", value: "value5" },
    { id: "6", value: "value6" },
    { id: "7", value: "value7" },
    { id: "8", value: "value8" },
  ],
};
export const Basic = () => (
  <div>
    <Main {...props} />
  </div>
);
