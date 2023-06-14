import BubbleChart from "@components/BubbleChart";
import { getData } from "@services/skills.data";

const fetchData = async (req?: string | undefined) => {
  const res = await Promise.resolve(getData(req && decodeURIComponent(req)));
  // console.log(req, res);
  return res || [];
};

const Skills = async ({ params }: { params: { id?: Array<string> } }) => {
  // console.log(params.id);
  const data = await fetchData(params.id ? params.id.pop() : undefined);

  return (
    <div className="relative flex place-items-center">
      <BubbleChart className="m-0 p-0" data={data} />
    </div>
  );
};

export default Skills;
