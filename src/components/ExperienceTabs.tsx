"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren, createElement } from "react";
import * as HeroIcons from "@heroicons/react/24/outline";

import { type Item } from "@services/experience.data";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Card, CardHeader, CardBody, CardFooter, List, ListItem, Typography } from "@material-tailwind/react";

interface ExperienceTabsProps extends PropsWithChildren<any> {
  group: string;
  title?: string | undefined;
  item?: Item | undefined;
  list?: Array<Item> | undefined;
  onClick?: (key: string) => void;
}

export default function ExperienceTabs({ group, title, item, list }: ExperienceTabsProps) {
  const router = useRouter();
  const handleClick = (link: string) => router.push(`/experience/${link}`, { scroll: false });

  // console.log(group, title, item, list);

  const renderCard = ({ title, location, symbol, period }: Item, details?: any) => (
    <Card className="w-full m-2 p-0">
      <CardHeader color="blue-gray" className="relative mt-1">
        {" "}
      </CardHeader>
      <CardBody className="relative">
        {symbol != undefined && createElement(HeroIcons[symbol], { strokeWidth: 1, className: "absolute top-0 right-2 float-right h-24 w-24 opacity-30" })}
        <Typography variant="h5" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography color="gray" className="font-normal">
          {location}
        </Typography>
        {details && (
          <>
            <Typography variant="small" color="gray" className="mt-2 italic small-caps font-medium float-right">
              {period}
            </Typography>
            <div className="mt-10">{details}</div>
          </>
        )}
      </CardBody>
      <CardFooter className="mr-1 p-2">
        {!details && (
          <Typography variant="small" color="gray" className="mt-2 italic small-caps font-medium float-right">
            {period}
          </Typography>
        )}
      </CardFooter>
    </Card>
  );

  const renderItems = () =>
    list &&
    list.map((item: any, index: number) => {
      return (
        <ListItem className="w-full m-0 p-0" key={index} onClick={() => handleClick(`${group}/${item?.title}`)}>
          {renderCard(item)}
        </ListItem>
      );
    });

  const renderTabs = () => (
    <>
      <TabsHeader className="mt-5">
        <Tab className="whitespace-nowrap z-10" value="works" onClick={() => handleClick("works")}>
          Work Experience
        </Tab>
        <Tab className="whitespace-nowrap z-10" value="schools" onClick={() => handleClick("schools")}>
          Education History
        </Tab>
      </TabsHeader>
      <TabsBody className="w-full h-full overflow-x-hidden overflow-y-auto">
        <TabPanel className="pb-20" value={group}>
          {!title && <List className="w-full m-0 p-0">{renderItems()}</List>}
          {title && item && renderCard(item, item?.details)}
        </TabPanel>
      </TabsBody>
    </>
  );

  return (
    <>
      <Tabs className="hidden md:flex m-0 p-0 mt-10 pl-2 lg:mt-0 lg:px-40 w-full h-[calc(100vh-8rem)] flex-row" value={group} orientation="vertical">
        {renderTabs()}
      </Tabs>
      <Tabs className="block md:hidden m-0 p-0 mt-10 px-2 w-full h-[calc(100vh-8rem)]" value={group} orientation="horizontal">
        {renderTabs()}
      </Tabs>
    </>
  );
}
