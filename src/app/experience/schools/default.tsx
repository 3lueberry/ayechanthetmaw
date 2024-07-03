import ExperienceTabs from "@/src/components/ExperienceTabs";
import { GetList } from "@services/experience.data";

export default async function Default() {
  const data = await GetList("schools");
  return <ExperienceTabs {...data}></ExperienceTabs>;
}
