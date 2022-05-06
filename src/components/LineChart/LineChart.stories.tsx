import React from "react";
import { LineChart, LineChartProps } from "./index";

export default {
  title: "LineChart",
  component: LineChart,
};
const props: LineChartProps = {
  series: [
    { type: "line", name: "Line1", data: [1, 2, 3, 4, 5] },
    { type: "line", name: "Line2", data: [2, 4, 6, 8, 10] },
    { type: "line", name: "Line3", data: [3, 6, 9, 12, 15] },
  ],
};

export const Basic = () => (
  <div>
    <LineChart {...props} />
  </div>
);
