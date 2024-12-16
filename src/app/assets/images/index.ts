import fallback from "./image_not_found.png";
import placeholder from "./placeholder.svg";
import bgCreditCard from "./bg_credit_card.svg";

export const images = {
  fallback,
  placeholder,
  bgCreditCard
};

type IImage = keyof typeof images;

export const getImage = (id: IImage) => {
  return images[id] ?? images.fallback;
};
