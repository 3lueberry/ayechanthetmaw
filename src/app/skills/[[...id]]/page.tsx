import BubbleChart from "@components/BubbleChart";
import fetchSkills from "@services/skills.data";
import { notFound } from "next/navigation";

const Skills = async ({ params }: { params: { id?: Array<string> } }) => {
  const data = await fetchSkills(params.id ? params.id.pop() : undefined);
  if (data.length == 0) return notFound();

  return (
    <div className="relative flex place-items-center lg:-mt-20">
      <BubbleChart className="m-0 p-0" data={data} />
    </div>
  );
};

export default Skills;
