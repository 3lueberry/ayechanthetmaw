"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, chip } from "@material-tailwind/react";

import {
  Card,
  Menu,
  Badge,
  Button,
  Avatar,
  Navbar,
  Popover,
  MenuList,
  MenuItem,
  Progress,
  IconButton,
  Typography,
  MenuHandler,
  PopoverHandler,
  PopoverContent,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";

import {
  ComputerDesktopIcon,
  CubeTransparentIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  AcademicCapIcon,
  CommandLineIcon,
  FingerPrintIcon,
  CreditCardIcon,
  Cog6ToothIcon,
  BriefcaseIcon,
  Bars2Icon,
  PowerIcon,
  XMarkIcon,
  AtSymbolIcon,
  LifebuoyIcon,
  UserCircleIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  InboxArrowDownIcon,
  CodeBracketSquareIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

const experience: { works: Array<any>; schools: Array<any> } = {
  works: [
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
  ],
  schools: [
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
  ],
};

export default function Experience() {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<string>(searchParams?.has("education") ? "education" : "experience");

  const changeExperience = () => setTab("experience");
  const changeEducation = () => setTab("education");

  useEffect(() => {
    console.log(searchParams);
    if (searchParams?.has("education")) {
      setTab("education");
    } else if (tab == "education") {
      setTab("experience");
    }
  }, []);

  const renderItems = (route: "works" | "schools") =>
    experience[route].map(({ title, description, symbol }, id: number) => {
      const triggers = {
        // onMouseEnter: () => setCard(symbol),
        // onMouseLeave: () => setCard(icon),
      };

      return (
        <Link className="card" {...triggers} key={id} href={`/experience/${title}`} passHref={true}>
          <MenuItem>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </MenuItem>
        </Link>
      );
    });

  return (
    <Tabs className="m-0 p-0 mt-10 px-40 w-full min-h-[calc(100vh-8rem)] flex flex-row" value={tab} orientation="vertical">
      <TabsHeader>
        <Tab className="whitespace-nowrap" key="experience" value="experience" onClick={changeExperience}>
          Work Experience
        </Tab>
        <Tab className="whitespace-nowrap" key="education" value="education" onClick={changeEducation}>
          Education History
        </Tab>
      </TabsHeader>
      <TabsBody className="w-full h-full">
        <TabPanel key="experience" value="experience">
          <section className="cards-container">{experience && renderItems("works")}</section>
        </TabPanel>
        <TabPanel key="education" value="education">
          <section className="cards-container">{experience && renderItems("schools")}</section>
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}
