"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const ClientSide = ({ pathname }: any) => {
  const [href, setHref] = useState("");
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    setHref(window.location.href);
  }, []);

  return <>{pathname && <>{href}</>}</>;
};

export default ClientSide;
