const { baseURL } = require("@/server/config");

interface API {
  code: number;
  msg: string;
  data?: any;
  error?: any;
}

export interface Item {
  title: string;
  location: string;
  period: string;
  symbol?: string;
  details?: string;
}

export interface Data {
  group: string;
  title?: string;
  item?: Item;
  list: Array<Item>;
}

export const revalidate = 1;

// const getSymbol = (item: Item): Item => ({ ...item, symbol: item?.symbol ? HeroIcons[item?.symbol] : null });
// const formatData = ({ group, title, item, list }): Data => {
//   if (item != undefined) item = getSymbol(item);
//   if (list != undefined && list.length > 0) list = list.map((item: Item) => getSymbol(item));
//   return { group, title, item, list };
// };

export type GetList = (id: string) => Data;
export async function GetList(id: string) {
  const params = new URLSearchParams();
  if (id != undefined) {
    params.append("group", id);
    params.append("search", id);
  }
  try {
    const url = `${baseURL}/api/experience?${params}`;
    const res = await fetch(url);
    const { code, msg, data, error }: API = await res.json();
    if (code == 200 && data) return data;
    else return { group: "", list: [] };
  } catch (e) {
    console.error(e.message);
    return { group: "", list: [] };
  }
}

export type GetItem = ({ group, id }: { group?: string; id?: string }) => Item;
export async function GetItem({ group, id }: { group?: string; id?: string } = {}) {
  const params = new URLSearchParams();
  if (group != undefined) params.append("group", group);
  if (id != undefined) params.append("search", id);
  try {
    const url = `${baseURL}/api/experience?${params}`;
    const res = await fetch(url);
    const { code, msg, data, error }: API = await res.json();
    if (code == 200 && data?.item) return data?.item;
    else return {};
  } catch (e) {
    console.error(e.message);
    return {};
  }
}

// export type GetAllList = () => Array<any>;
// export default function GetAllList() {
//   return Object.values(experience);
// }
