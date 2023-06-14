declare module "colors.config" {
  export const hex = require("./colors.config.json");
  export type hex = typeof hex;

  export type color = Extract<keyof hex, string>;
  export type colors = Array<color>;
  export const colors: colors = Object.keys(hex);

  export const light: colors = Object.keys(hex).filter((c) => !["slate", "gray", "zinc", "stone", "neutral"].includes(c));
  export const dark: colors = Object.keys(hex).filter((c) => ["slate", "gray", "zinc", "stone", "neutral"].includes(c));

  const _shades = (Object.values(hex) as Array<any>)[0];
  export type shades = keyof typeof _shades;
  export const shades = Object.keys(_shades);

  export default colors;
}
