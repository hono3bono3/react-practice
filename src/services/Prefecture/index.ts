import { prefectures as MockPrefectures } from "./mock";

type Prefecture = {
  prefCode: number;
  prefName: string;
};

export function getPrefectures(): Prefecture[] {
  return MockPrefectures.result;
}
