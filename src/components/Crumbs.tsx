"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Breadcrumbs } from "@material-tailwind/react";
import { HomeIcon } from "@heroicons/react/24/solid";

const Crumbs = () => {
  type crumb = { id: number; uri: string; path: string; last: boolean };
  const [crumbs, setCrumbs] = useState<Array<crumb>>([]);
  const pathname = usePathname();
  useEffect(() => {
    // const encoder = new TextEncoder();
    // const decoder = new TextDecoder();
    // console.log(Buffer.from(encoder.encode("")).toString("hex"));
    // console.log(decoder.decode(Buffer.from("6d61696c746f3a2f2f6b75616e67796f6e676368616e6740676d61696c2e636f6d", "hex")));
    if (pathname)
      setCrumbs((prev: any): Array<crumb> => {
        const home: crumb = { id: 0, uri: window.location.hostname, path: "/", last: true };
        if (pathname === "/") return [home];
        home.last = false;
        prev = pathname.split("/");
        prev = prev.map((x: string, id: number) => ({ id, uri: decodeURIComponent(x), path: prev.slice(0, id + 1).join("/"), last: false }));
        prev[0] = home;
        prev[prev.length - 1].last = true;
        return prev;
      });
  }, [pathname]);

  const switchMode = (e: any) => {
    // console.log(e);
    if (e.matches) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  };

  useEffect((): (() => void) => {
    setCrumbs((prev: any) => structuredClone(prev));
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)");

    switchMode(darkMode);
    darkMode.addEventListener("change", switchMode);
    document.querySelectorAll('[aria-label="breadcrumb"]').forEach((x) => x.classList.remove("w-max"));
    return () => darkMode.removeEventListener("change", switchMode);
  }, []);

  return (
    <Breadcrumbs
      fullWidth
      className="w-full md:w-auto whitespace-nowrap h-10 rounded-full bg-gradient-to-b from-zinc-200 shadow-inner flex flex-nowrap item-center justify-center lg:justify-start overflow-x-auto overflow-y-hidden">
      {crumbs.map(({ id, uri, path, last }) => {
        return (
          <Link key={id} href={`${path}#`} className={last ? "" : "opacity-60"}>
            {id === 0 && crumbs.length > 2 ? <HomeIcon className="w-3 h-3" /> : uri}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default Crumbs;
