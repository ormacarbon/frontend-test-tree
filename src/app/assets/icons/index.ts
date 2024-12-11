import logo from "./logo.svg";
import fallback from "./placeholder.png";

export const icons = {
  logo,
  fallback,
};
type IIcons = keyof typeof icons;

export const getIcons = (id: IIcons) => {
  return icons[id] ?? icons.fallback;
};
