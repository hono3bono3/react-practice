import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const defaultOptions = {
  title: {
    text: "人口増減率",
  },
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointInterval: 5,
      pointStart: 1960,
    },
  },
  yAxis: {
    title: {
      text: "人口数",
    },
  },
  xAxis: {
    title: {
      text: "年度",
    },
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },
  series: [
    {
      name: "兵庫県",
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
    },
    {
      name: "北海道",
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
    },
    {
      name: "東京都",
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
    },
    {
      name: "静岡県",
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
    },
    {
      name: "群馬県",
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
    },
  ],
};

export const LineChart: any = () => {
  const options = { ...defaultOptions };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
