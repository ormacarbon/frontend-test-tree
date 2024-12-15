import Image from "next/image";

import { Props } from "./@types";
import { Title } from "../../elements";
import { icons } from "@/app/assets/icons";

const Header = ({ title, className, icon }: Props) => {
  return (
    <div className={`flex truncate justify-center mx-auto items-center w-full gap-3 max-w-[572px] lg:justify-start lg:mx-0 ${className}`}>
      <Image
        alt="Image logo"
        src={icon ?? icons.logo}
        className="max-w-[70%]"
      />
      <Title className="flex-1 truncate max-w-fit">{title ?? "Checkout Carbon"}</Title>
    </div>
  );
};

export default Header;
