import { type NextRequest, NextResponse } from "next/server";
import { light as colors } from "@/colors_config";
import { Data } from "@components/BubbleChart";

const data = require("./skills.data.json");

interface search {
  [key: string]: { [key: string]: any };
}

// export type copy = (x: any) => any;
// export type randomize = (arr: Array<any>) => Array<any>;
// export type formatData = (d: any) => Array<Data>;
// export type deepSearch = (s: string, d: any) => any;
// export type getData = (s?: string | undefined) => Array<Data>;

const copy = (x: any): any => structuredClone(x);
const randomize = (arr: Array<any>): Array<any> => copy(arr).sort(() => Math.random() - 0.5);
const formatData = (d: any): Array<Data> => {
  const randomColors = randomize(colors);
  return randomize(Object.entries(d)).map(([name, v]: [name: string, v: any], id: number): Data => ({ id, name, size: Object.keys(v).length || 1, color: randomColors[id] }));
};

const flatMap = (d: any) => {
  if (JSON.stringify(d) === "{}") return null;
  const temp: any = Object.values(d).map((v) => flatMap(v));
  return temp.every((x: any) => !x) ? formatData(d) : temp.flatMap((x: any) => x);
};

const deepSearch = (s: string, d: any): search => {
  if (d[s]) return d[s];
  else {
    for (let i of Object.values(d)) {
      const found: search = deepSearch(s, i);
      if (JSON.stringify(found) !== "{}") return found;
    }
    return {};
  }
};

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const params = searchParams.get("search");
    const search = params && decodeURIComponent(params);
    const res = (() => {
      if (search === "all")
        return [
          ...flatMap(data)
            .flatMap((x: Data, id: number) => ({ ...x, id }))
            .filter((x: Data) => x.size === 1),
          { id: -1, name: search, size: 12, color: "slate" } as Data,
        ];
      return search
        ? [{ id: -1, name: search, size: 0, color: "slate" } as Data, ...formatData(deepSearch(search, data))]
        : [{ id: -2, name: "", size: 0, color: "slate" } as Data, ...formatData(data)];
    })();
    return NextResponse.json({ code: 200, msg: "success", data: res });
  } catch (e: any) {
    return NextResponse.json({ code: 404, msg: "error", error: e.message });
  }
}
