import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const defaultOptions: Highcharts.Options = {
  title: {
    text: "",
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
  series: [],
};

export type LineChartProps = {
  series: Highcharts.SeriesLineOptions[];
};

export const LineChart = ({ series }: LineChartProps) => {
  const _options = { ...defaultOptions, ...{ series } };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={_options} />
    </div>
  );
};
