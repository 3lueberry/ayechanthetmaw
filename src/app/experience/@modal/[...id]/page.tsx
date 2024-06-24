"use client";

import { Modal } from "./modal";
import { useRouter } from "next/navigation";
import { Typography } from "@material-tailwind/react";
import { ComputerDesktopIcon, CubeTransparentIcon, CreditCardIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

const experience = [
  {
    title: "Application Developer (DBS Project)",
    description: "NITYO INFOTECH PTE. LTD.",
    symbol: CreditCardIcon,
  },
  {
    title: "Apprentice Full Stack Developer",
    description: "GENERAL ASSEMBLY",
    symbol: Cog6ToothIcon,
  },
  {
    title: "Deputy Business Development Manager",
    description: "GLOBAL CYBERMIND TECHNOLOGIES PTE. LTD.",
    symbol: ComputerDesktopIcon,
  },
  {
    title: "Software Engineering Intensive",
    description: "GENERAL ASSEMBLY",
    symbol: Cog6ToothIcon,
  },
  {
    title: "Diploma in Mechatronic",
    description: "SINGAPORE POLYTECHNICS",
    symbol: CubeTransparentIcon,
  },
];

export default function DetailModal({ params }: { params: { id: string } }) {
  const router = useRouter();
  if (!params?.id) router.push("/experience");
  else params.id = decodeURIComponent(params.id);

  const getTitle = () => experience.find(({ title }) => title == params?.id)?.title;
  const getDesc = () => experience.find(({ title }) => title == params?.id)?.description;

  return (
    <>
      {params?.id && (
        <Modal>
          <Typography variant="h6" color="blue-gray" className="block w-full mb-1">
            {getTitle()}
          </Typography>
          <Typography variant="small" color="gray" className="block w-full font-normal">
            {getDesc()}
          </Typography>
        </Modal>
      )}
    </>
  );
}
