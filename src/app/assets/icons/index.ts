import logo from "./logo.svg";
import chip from "./chip.svg";
import plant from "./plant.svg";
import fallback from "./placeholder.png";
import errorCardBuy from "./error_card_buy.svg";
import summaryBuyLogo from "./summary_buy_logo.svg";
import successCardBuy from "./success_card_buy.svg";
import circularSpinner from "./circular_spinner.png";

export const icons = {
  logo,
  chip,
  plant,
  fallback,
  errorCardBuy,
  successCardBuy,
  summaryBuyLogo,
  circularSpinner,
};
type IIcons = keyof typeof icons;

export const getIcons = (id: IIcons) => {
  return icons[id] ?? icons.fallback;
};
