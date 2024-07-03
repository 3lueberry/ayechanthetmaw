import ExperienceTabs from "@/src/components/ExperienceTabs";
import { GetList } from "@services/experience.data";

export default async function WorkPage() {
  const data = await GetList("works");
  return <ExperienceTabs {...data}></ExperienceTabs>;
}
