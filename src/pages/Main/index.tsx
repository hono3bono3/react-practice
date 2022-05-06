import React, { useState, ChangeEvent } from "react";
import "./Main.css";
import { getPrefectures } from "../../services/Prefecture";
import {
  getTotalPopulationBy,
  TotalPopulation,
} from "../../services/PopulationComposition";
import {
  CheckBoxFilter,
  CheckBoxFilterProps,
} from "../../components/CheckBoxFilter";
import { LineChart, LineChartProps } from "../../components/LineChart";

type Prefecture = {
  id: string;
  value: string;
  totalPopulation: TotalPopulation[];
};

export const Main = () => {
  const [prefectures, setPrefectures] = useState(
    getPrefectures().map(
      ({ prefCode, prefName }): Prefecture => ({
        id: String(prefCode),
        value: prefName,
        totalPopulation: [],
      })
    )
  );

  const [checkedPrefectureIds, setCheckedPrefectureIds] = useState<string[]>(
    []
  );

  const [series, setSeries] = useState<LineChartProps["series"]>([]);

  const handleOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const targetId = e.currentTarget.id;

    let updatedCheckedPrefectureIds = [...checkedPrefectureIds];
    if (checkedPrefectureIds.includes(targetId)) {
      updatedCheckedPrefectureIds = checkedPrefectureIds.filter(
        (id) => id !== targetId
      );
    } else {
      updatedCheckedPrefectureIds.push(targetId);
    }
    setCheckedPrefectureIds(updatedCheckedPrefectureIds);

    const targetPrefecture = prefectures.find((p) => p.id === targetId);
    if (!targetPrefecture) {
      return;
    }

    if (targetPrefecture.totalPopulation.length === 0) {
      targetPrefecture.totalPopulation = await getTotalPopulationBy({
        prefCode: Number(targetId),
      });
    }
    setPrefectures([...prefectures]);

    setSeries(
      prefectures
        .filter((pref) => updatedCheckedPrefectureIds.includes(pref.id))
        .map((pref) => ({
          type: "line",
          name: pref.value,
          data: pref.totalPopulation.map((p) => p.value),
        }))
    );
  };

  const checkboxFilterProps: CheckBoxFilterProps = {
    checkboxes: prefectures.map((pref, index) => {
      return {
        ...pref,
        checked: checkedPrefectureIds.includes(pref.id),
        onChange: handleOnChange,
      };
    }),
  };

  return (
    <div className="container">
      <header className="header">都道府県</header>
      <main>
        <div className="prefecture">
          <CheckBoxFilter {...checkboxFilterProps} />
        </div>
        <div className="population-graph">
          <LineChart series={series} />
        </div>
      </main>
    </div>
  );
};
