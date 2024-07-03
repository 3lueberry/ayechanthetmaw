import { MDX } from "@/src/components/MDX";
import { GetList, type Item } from "@services/experience.data";
import ExperienceTabs from "@/src/components/ExperienceTabs";

export default async function Experience({ params }: any) {
  const id = decodeURIComponent(params.id);
  const data = await GetList(id);

  if (data?.item) {
    const { details } = data.item as Item;
    if (details) {
      data.item.details = <MDX source={details} />;
    }
  }

  return <ExperienceTabs {...data}></ExperienceTabs>;
}
