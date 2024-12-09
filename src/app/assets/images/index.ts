import fallback from "./image_not_found.png";
import placeholder from "./placeholder.svg";

export const images = {
  fallback,
  placeholder,
};

type IImage = keyof typeof images;

export const getImage = (id: IImage) => {
  return images[id] ?? images.fallback;
};
