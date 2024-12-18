import Image from "next/image";

export const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative flex aspect-square h-auto min-w-[100px]">
        <Image
          src={"/loading.png"}
          alt="credit card front image"
          fill
          className="animate-spin"
        />
      </div>
    </div>
  );
};
