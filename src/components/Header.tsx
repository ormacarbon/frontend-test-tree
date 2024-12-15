import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
export const Header: FunctionComponent = () => {
  return (
    <header className="lg:top-0 left-0 z-20 lg:relative w-full flex justify-center lg:justify-start px-[31px] lg:px-0">
      <div className=" flex items-end gap-3">
        <div className="relative min-h-[59px] min-w-11">
          <Image src={"/logo.svg"} alt="logo image" fill sizes="40px" />
        </div>
        <strong className=" text-3xl xs:text-4xl flex text-nowrap text-primary-500">
          Checkout Carbon
        </strong>
      </div>
    </header>
  );
};
