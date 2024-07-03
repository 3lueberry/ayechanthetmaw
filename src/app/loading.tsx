"use client";

import { Spinner } from "@material-tailwind/react";
import type { color } from "@material-tailwind/react/types/components/spinner";
import { muiColors, randomize } from "@/colors_config";

const Loading = () => {
  const color: color = randomize(muiColors) as color;
  return <Spinner color={color} className="w-1/6 h-1/6 md:w-1/12 md:h-1/12" />;
};

export default Loading;
