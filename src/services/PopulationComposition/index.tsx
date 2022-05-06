import { ResasClient } from "../../middleware/Resas";

type getPopulationCompositionQuery = {
  prefCode: number;
};

export type TotalPopulation = {
  prefCode: number;
  year: number;
  value: number;
};

export async function getTotalPopulationBy({
  prefCode,
}: getPopulationCompositionQuery): Promise<TotalPopulation[]> {
  const path = "api/v1/population/composition/perYear";
  const result = await ResasClient.get(path, {
    params: { cityCode: "-", prefCode },
  });

  const total = result.data.result.data.find(
    (data: any) => data.label === "総人口"
  );
  return total?.data.map((d: any) => ({ prefCode, ...d })) ?? [];
}
