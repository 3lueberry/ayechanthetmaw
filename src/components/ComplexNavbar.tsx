"use client";

import React from "react";
import Link from "next/link";
import Breadcrumbs from "./Crumbs";
import { useRouter } from "next/navigation";

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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faLinkedin, faGithub, faGoogle, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// profile menu component
const profileMenuItems = [
  {
    label: "/ayechanthetmaw",
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/ayechanthetmaw/",
  },
  {
    label: "/3lueberry",
    icon: faGithub,
    link: "https://github.com/3lueberry",
  },
];

function ProfileMenu({ human }: any) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  const decoder = new TextDecoder();
  const mail = "6d61696c746f3a6b75616e67796f6e676368616e6740676d61696c2e636f6d";
  const wa = "68747470733a2f2f77612e6d652f2b36353937373030373037";

  const sendMail = () => {
    window.open(decoder.decode(Buffer.from(mail, "hex")), "noreferrer");
    closeMenu();
  };

  const sendMsg = () => {
    window.open(decoder.decode(Buffer.from(wa, "hex")), "_blank", "noreferrer");
    closeMenu();
  };

  // React.useEffect(() => {
  //   if (human > 85) setIsMenuOpen(true);
  // }, [human]);

  return (
    <Menu
      open={isMenuOpen}
      handler={setIsMenuOpen}
      placement="bottom-end"
      animate={{
        mount: { scale: 1, x: 0, y: 0 },
        unmount: { scale: 0, x: 80, y: -5 },
      }}>
      <MenuHandler>
        <Button
          variant="text"
          color="white"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 ml-1 lg:ml-auto hover:bg-blue-gray-50 hover:text-blue-gray-900 focus-visible:outline-none">
          {/* <Badge overlap="circular" placement="bottom-end" color="green" withBorder={true}> */}
          <Avatar variant="circular" size="sm" alt="ayechan" className="border border-blue-500 p-0.5 bg-blue-gray-50" src="/img/avatar.png" />
          {/* </Badge> */}
          <ChevronDownIcon strokeWidth={2.5} className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`} />
        </Button>
      </MenuHandler>
      <MenuList {...triggers} className="p-1">
        {profileMenuItems.map(({ label, icon, link }: any, key) => {
          return (
            <Typography key={label} as="a" href={link} rel="noopener noreferrer" target="_blank" variant="small" className="font-normal" color="inherit">
              <MenuItem onClick={closeMenu} className={`flex items-center gap-2 rounded`}>
                <FontAwesomeIcon icon={icon} fixedWidth />
                {label}
              </MenuItem>
            </Typography>
          );
        })}
        {human === 100 && (
          <>
            <hr className="my-3" />
            <MenuItem onClick={sendMail} className={`flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}>
              <Typography variant="small" className="font-normal" color="red">
                <FontAwesomeIcon icon={faGoogle} fixedWidth />
                /kuangyongchang
              </Typography>
            </MenuItem>
            <MenuItem onClick={sendMsg} className={`flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}>
              <Typography variant="small" className="font-normal" color="red">
                <FontAwesomeIcon icon={faWhatsapp} fixedWidth />
                /9••• •707
              </Typography>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
}

export function Contact() {
  const decoder = new TextDecoder();
  const mail = "6d61696c746f3a6b75616e67796f6e676368616e6740676d61696c2e636f6d";
  const wa = "68747470733a2f2f77612e6d652f2b36353937373030373037";

  const sendMail = () => {
    window.open(decoder.decode(Buffer.from(mail, "hex")), "noreferrer");
  };

  const sendMsg = () => {
    window.open(decoder.decode(Buffer.from(wa, "hex")), "_blank", "noreferrer");
  };

  const [open, setOpen] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);

  const handleOpen = (state: any) => setOpen(state);
  const triggers = {
    // onClick: () => setOpen((x) => !x),
    // onMouseLeave: () => {
    //   setClicked(false);
    //   setOpen(false);
    // },
    // onFocus: () => (!open ? setOpen(true) : null),
    onBlur: () => setOpen(false),
  };

  React.useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <div className="absolute top-0 left-0 w-screen h-screen pointer-events-none bg-transparent">
      <div className="absolute bottom-5 right-5 lg:bottom-20 2xl:bottom-10 lg:right-10 pointer-events-auto">
        <SpeedDial open={open} handler={handleOpen}>
          <SpeedDialHandler>
            <IconButton {...triggers} size="lg" className={`rounded-full ${open ? "bg-red-500" : ""}`}>
              {open && <PowerIcon className="h-5 w-5 group-hover:block group-active:block" />}
              {!open && <FingerPrintIcon className="h-7 w-7" />}
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction className="bg-blue-gray-200">
              <AtSymbolIcon onClick={sendMail} className="h-6 w-6 bg-blue-gray-200 text-blue-gray-900" />
            </SpeedDialAction>
            <SpeedDialAction className="bg-blue-gray-200">
              <ChatBubbleOvalLeftEllipsisIcon onClick={sendMsg} className="h-6 w-6 bg-blue-gray-200 text-blue-gray-900" />
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}

function NavListMenu({ item }: any) {
  const { label, icon, link } = item;
  const navListMenuItems: Array<any> = item.list || [];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const triggers = item.list
    ? {
        onMouseEnter: () => setIsMenuOpen(true),
        onMouseLeave: () => setIsMenuOpen(false),
      }
    : {};

  const [card, setCard] = React.useState(icon);

  const renderItems = navListMenuItems.map(({ title, description, symbol }) => {
    const triggers = {
      onMouseEnter: () => setCard(symbol),
      onMouseLeave: () => setCard(icon),
    };

    return (
      <Link {...triggers} href="#" key={title}>
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
    <Menu
      open={isMenuOpen}
      handler={setIsMenuOpen}
      animate={{
        mount: { scale: 1, x: 0, y: 0 },
        unmount: { scale: 0, x: 0, y: -5 },
      }}>
      <MenuHandler className="focus-visible:outline-none">
        <Typography as={Link} href={link} variant="small" className="font-normal">
          <MenuItem {...triggers} className="items-center gap-2 text-white lg:flex lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })} {label}{" "}
            {item.list && <ChevronDownIcon strokeWidth={2} className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`} />}
          </MenuItem>
        </Typography>
      </MenuHandler>
      {item.list && (
        <MenuList {...triggers} className="w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card color="blue" shadow={false} variant="gradient" className="col-span-2 grid h-full w-full place-items-center rounded-md focus-visible:outline-none">
            {React.createElement(card, { strokeWidth: 1, className: "h-28 w-28" })}
          </Card>
          <ul className="col-span-5 flex w-full flex-col gap-1">{renderItems}</ul>
        </MenuList>
      )}
    </Menu>
  );
}

// nav list component
const navListItems = [
  {
    label: "Skills",
    icon: Square3Stack3DIcon,
    link: "/skills",
  },
  {
    label: "Experience",
    icon: BriefcaseIcon,
    link: "/experience",
    list: [
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
  },
  {
    label: "Education",
    icon: AcademicCapIcon,
    link: "/experience?education",
    list: [
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
  },
  {
    label: "Codes",
    icon: CommandLineIcon,
    link: "#",
  },
];

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map((item: any, key) => (
        <NavListMenu key={key} item={item} />
      ))}
    </ul>
  );
}

function MobileNavList() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();
  const closeMenu = (link: string) => {
    router.push(link);
    setIsMenuOpen(false);
  };

  React.useEffect((): (() => void) => {
    const setMenuClose = () => window.innerWidth >= 960 && setIsMenuOpen(false);
    window.addEventListener("resize", setMenuClose);
    return () => window.removeEventListener("resize", setMenuClose);
  }, []);

  return (
    <Menu
      open={isMenuOpen}
      handler={setIsMenuOpen}
      placement="bottom-end"
      animate={{
        mount: { y: -5 },
        unmount: { y: -50 },
      }}>
      <MenuHandler>
        <IconButton size="sm" color="white" variant="text" className="ml-auto md:ml-[100px] mr-2 lg:hidden">
          {!isMenuOpen && <Bars2Icon className="h-6 w-6" />}
          {isMenuOpen && <XMarkIcon className="h-6 w-6" />}
        </IconButton>
      </MenuHandler>
      <MenuList className="p-1 pt-4 w-full bg-[#629bf8] border-blue-500 z-10">
        {/* <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center"> */}
        {navListItems.map(({ label, icon, link }: any, key) => (
          <Typography key={label} onClick={() => closeMenu(link)} variant="paragraph" className="font-normal">
            <MenuItem className="flex items-center gap-2 text-white justify-end lg:hidden">
              {label}
              {React.createElement(icon, { className: "h-[20px] w-[20px]" })}
            </MenuItem>
          </Typography>
        ))}
        {/* </ul> */}
      </MenuList>
    </Menu>
  );
}

export default function ComplexNavbar() {
  const [progress, setProgress] = React.useState(0);
  const [hoverProgress, setHoverProgress] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const hoverEvents = {
    onMouseEnter: () => {
      if (progress !== 100) setProgress(0);
      setHoverProgress(true);
    },
    onMouseLeave: () => setHoverProgress(false),
  };

  React.useEffect(() => {
    if (hoverProgress && !isLoading && progress < 100) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setProgress((p) => {
          let rand = Math.ceil(Math.random() * 5);
          if (p + rand > 100) return 100;
          else return p + rand;
        });
      }, 300);
    }
  }, [progress, hoverProgress]);

  return (
    <>
      <Navbar className="relative mx-auto max-w-screen-xl bg-blue-500/100 border-0 p-2 pt-0 md:pt-2 rounded-t-none rounded-b-xl lg:rounded-full">
        <div className="block flex flex-nowrap w-full item-center justify-center md:hidden overflow-x-auto overflow-y-hidden pt-1 pb-2 md:py-0">
          <Breadcrumbs />
        </div>
        <div className="relative mx-auto flex items-center text-white">
          <Popover
            open={hoverProgress}
            handler={setHoverProgress}
            placement="bottom-start"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 1, y: -50 },
            }}>
            <PopoverHandler {...hoverEvents}>
              <Link href="/" className="pl-2 pr-0.5 w-[190px] cursor-pointer py-1.5 lg:ml-4">
                <Typography className="font-bold uppercase">Aye Chan Thet Maw</Typography>
              </Link>
            </PopoverHandler>
            <PopoverContent>
              <Progress
                className={`w-[250px] whitespace-nowrap`}
                size="sm"
                variant="gradient"
                color="green"
                value={progress}
                label={progress === 100 ? "Thank you for your patience, human." : " " + "Scanning...".substring(0, Math.floor((progress - 10) / 5))}
              />
            </PopoverContent>
          </Popover>
          <div className="hidden md:block mx-auto flex flex-nowrap item-center justify-center overflow-x-auto overflow-y-hidden lg:hidden">
            <Breadcrumbs />
          </div>
          <div className="mx-auto flex items-center hidden lg:block">
            <NavList />
          </div>
          <MobileNavList />
          <ProfileMenu human={progress} />
        </div>
        {/* <MobileNav open={isNavOpen} className="absolute overflow-x-clip overflow-y-auto no-scrollbar">
          <MobileNavList closeNav={toggleIsNavOpen} />
        </MobileNav> */}
      </Navbar>
      {progress === 100 && <Contact />}
    </>
  );
}
