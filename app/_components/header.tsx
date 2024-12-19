import Image from "next/image";
export const Header = () => {
  return (
    <header className="left-0 z-20 flex w-full justify-center px-[31px] lg:relative lg:top-0 lg:justify-start lg:px-0">
      <div className="flex items-end gap-3">
        <div className="relative min-h-[59px] min-w-11">
          <Image src={"/logo.svg"} alt="logo image" fill sizes="40px" />
        </div>
        <strong className="xs:text-4xl flex text-nowrap text-3xl text-primary">
          Checkout Carbon
        </strong>
      </div>
    </header>
  );
};
