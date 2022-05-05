import React, { useState, ChangeEvent } from "react";
import { getPrefectures } from "../../services/Prefecture";
import "./Main.css";
import {
  CheckBoxFilter,
  CheckBoxFilterProps,
} from "../../components/CheckBoxFilter";

export const Main = () => {
  const prefectures = getPrefectures().map((p) => ({
    id: String(p.prefCode),
    value: p.prefName,
  }));
  const [checkedPrefectureIds, setCheckedPrefectureIds] = useState<string[]>(
    []
  );

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
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
        <div className="population-graph"></div>
      </main>
    </div>
  );
};
