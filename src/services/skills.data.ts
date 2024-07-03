const { baseURL } = require("@/server/config");

interface API {
  code: number;
  msg: string;
  data?: any;
  error?: any;
}

// export const revalidate = 1;

export default async function fetchSkills(req?: string | undefined) {
  const params = new URLSearchParams();
  if (req != undefined) params.append("search", req);
  try {
    const url = `${baseURL}/api/skills?${params}`;
    const res = await fetch(url);
    const { code, msg, data, error }: API = await res.json();
    if (code == 200 && data?.length > 1) return data;
    else return [];
  } catch (e) {
    console.error(e.message);
    return [];
  }
}
