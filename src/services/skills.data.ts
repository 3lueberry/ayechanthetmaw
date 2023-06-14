import { light as colors } from "colors.config";
import { Data } from "../components/BubbleChart";

export const data = require("./skills.data.json");
export type data = typeof data;

export interface search {
  [key: string]: { [key: string]: any };
}

export type deepSearch = (s: string, d: any) => any;
export type formatData = (d: any) => Array<Data>;
export type copy = (x: any) => any;
export type randomize = (arr: Array<any>) => Array<any>;
export type getData = (s?: string | undefined) => Array<Data>;

export const flatMap = (d: any) => {
  if (JSON.stringify(d) === "{}") return null;
  const temp: any = Object.values(d).map((v) => flatMap(v));
  return temp.every((x: any) => !x) ? formatData(d) : temp.flatMap((x: any) => x);
};

export const deepSearch = (s: string, d: any): search => {
  if (d[s]) return d[s];
  else {
    for (let i of Object.values(d)) {
      const found: search = deepSearch(s, i);
      if (JSON.stringify(found) !== "{}") return found;
    }
    return {};
  }
};

export const formatData = (d: any): Array<Data> => {
  const randomColors = randomize(colors);
  return randomize(Object.entries(d)).map(([name, v]: [name: string, v: any], id: number): Data => ({ id, name, size: Object.keys(v).length || 1, color: randomColors[id] }));
};

export const copy = (x: any): any => structuredClone(x);
export const randomize = (arr: Array<any>): Array<any> => copy(arr).sort(() => Math.random() - 0.5);
export const getData = (s?: string | undefined): Array<Data> => {
  if (s === "all")
    return [
      ...flatMap(data)
        .flatMap((x: Data, id: number) => ({ ...x, id }))
        .filter((x: Data) => x.size === 1),
      { id: -1, name: s, size: 12, color: "slate" } as Data,
    ];
  return s ? [{ id: -1, name: s, size: 0, color: "slate" } as Data, ...formatData(deepSearch(s, data))] : [{ id: -2, name: "", size: 0, color: "slate" } as Data, ...formatData(data)];
};
export default getData;
