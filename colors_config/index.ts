import data from "./colors.config.json";

export type hex = typeof hex;
export const hex = data;

export type color = Extract<keyof hex, string>;
export type colors = Array<color>;
export const colors = Object.keys(hex);

export type dark = Array<string>;
export const dark = ["slate", "gray", "zinc", "stone", "neutral"];

export type light = Array<string>;
export const light = colors.filter((c) => !dark.includes(c));

export type muiColors = Array<string>;
export const muiColors = [
  "white",
  "blue-gray",
  "gray",
  "brown",
  "deep-orange",
  "orange",
  "amber",
  "yellow",
  "lime",
  "light-green",
  "green",
  "teal",
  "cyan",
  "light-blue",
  "blue",
  "indigo",
  "deep-purple",
  "purple",
  "pink",
  "red",
];

const _shades = (Object.values(hex) as Array<any>)[0];
export type shades = keyof typeof _shades;
export const shades = Object.keys(_shades);

export const randomize = (arr: Array<string>) => arr[Math.floor(Math.random() * arr.length)];

export default colors;
