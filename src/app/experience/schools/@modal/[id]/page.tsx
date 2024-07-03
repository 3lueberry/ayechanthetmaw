import { MDX } from "@/src/components/MDX";
import { GetItem, type Item } from "@services/experience.data";
import ExperienceModal from "@/src/components/ExperienceModal";

export default async function SchoolModal({ params }: { params: { id: string } }) {
  const id = decodeURIComponent(params.id);
  const item = await GetItem({ group: "schools", id });
  const { title, location, period, details } = item as Item;

  return (
    <ExperienceModal title={title} location={location} period={period}>
      {details && <MDX source={details} />}
    </ExperienceModal>
  );
}
