import data from "./colors.config.json";
export const hex = data;
export const colors = Object.keys(hex);
export const light = Object.keys(hex).filter((c) => !["slate", "gray", "zinc", "stone", "neutral"].includes(c));
export const dark = Object.keys(hex).filter((c) => ["slate", "gray", "zinc", "stone", "neutral"].includes(c));
export const shades = Object.keys(Object.values(hex)[0]);
export default colors;
