import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { type NextRequest, NextResponse } from "next/server";

const { baseURL } = require("@/server/config");

// const __dirname = path.join(process.cwd(), "public", "experience");
const __dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), "details");
const details = {};

try {
  const files = fs.readdirSync(__dirname);
  files.forEach((file) => {
    const filename = decodeURIComponent(file.split(".")[0]);
    details[filename] = fs.readFileSync(path.join(__dirname, file), "utf8");
  });
} catch (e) {}

const data = require("./experience.data.json");
type data = typeof data;

interface Data {
  title: string;
  location: string;
  period: string;
  symbol?: string;
  details?: string;
}

// const { works, schools }: { works: Array<Data>; schools: Array<Data> } = data;
// const keys: Array<string> = Object.keys(data);
// const values: Array<Data> = Object.values(data);

// const experience = Object.keys(data).reduce(
//     (items: any, type: string) =>
//         ({ ...items, [type]: data[type]?.map((item: any) => ({ ...item, symbol: HeroIcons[item?.symbol] })) }), {});

// const GetList = (id: string) => {
//   id = decodeURIComponent(id);
//   if (works.findIndex(({ title }) => title == id) != -1) return { route: "works", title: id, list: works };
//   else if (schools.findIndex(({ title }) => title == id) != -1) return { route: "schools", title: id, list: schools };
//   else return { route: id, title: null, list: data[id] };
// };

// const GetItem = (route: string | undefined, id: string) => {
//   const list = route && Object.keys(experience).includes(route) ? experience[route] : Object.values(experience);
//   return list.find(({ title }) => title == id);
// };

const GetData = async ({ group, id }: { group?: string; id?: string } = {}) => {
  if (id != undefined) id = decodeURIComponent(id);
  // else if (group != undefined) return { group, list: data[group] };

  if (group && data[group] != undefined) {
    const item = data[group].find(({ title }) => title == id);
    if (item != undefined && item.title != undefined) {
      try {
        item.title = decodeURIComponent(item.title);
        if (details[item.title] != undefined) {
          item.details = details[item.title];
        } else {
          const url = `${baseURL}/experience/${encodeURIComponent(item.title)}.md`;
          const result = await fetch(url, { headers: { "Content-Type": "text/plain; charset=UTF-8" } });
          item.details = await result.text();
        }
      } catch (e) {}
    }
    return { group, title: item?.title, item, list: data[group] };
  } else {
    if (id == undefined) id = group;
    for (let [key, value] of Object.entries(data)) {
      const item: Data | undefined = (value as Array<Data>).find(({ title }: Data) => title == id);
      if (item != undefined) {
        try {
          item.title = decodeURIComponent(item.title);
          if (details[item.title] != undefined) {
            item.details = details[item.title];
          } else {
            const url = `${baseURL}/experience/${encodeURIComponent(item.title)}.md`;
            const result = await fetch(url, { headers: { "Content-Type": "text/plain; charset=UTF-8" } });
            item.details = await result.text();
          }
        } catch (e) {}
        return { group: key, title: item?.title, item, list: value };
      }
    }
  }

  return { list: Object.values(data) };
};

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  try {
    const group = searchParams.get("group") || undefined;
    const id = searchParams.get("search") || undefined;
    const res = await GetData({ group, id });
    return NextResponse.json({ code: 200, msg: "success", data: res });
  } catch (e: any) {
    console.log(e.message);
    return NextResponse.json({ code: 404, msg: "error", error: e.message });
  }
}
