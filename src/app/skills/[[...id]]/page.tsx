import BubbleChart from "@components/BubbleChart";
import { getData } from "@services/skills.data";
import { notFound } from "next/navigation";

export const revalidate = 1;

const fetchData = async (req?: string | undefined) => {
  const res = await getData(req && decodeURIComponent(req));
  if (res.length > 1) return { code: 200, msg: "success", data: res };
  else return { code: 404, msg: "error", data: [] };
};

const Skills = async ({ params }: { params: { id?: Array<string> } }) => {
  const { code, msg, data } = await fetchData(params.id ? params.id.pop() : undefined);
  if (code !== 200) return notFound();

  return (
    <div className="relative flex place-items-center lg:-mt-20">
      <BubbleChart className="m-0 p-0" data={data} />
    </div>
  );
};

export default Skills;
