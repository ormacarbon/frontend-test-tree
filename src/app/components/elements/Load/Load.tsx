import Image from "next/image";
import { motion } from "framer-motion";
import { HTMLAttributes } from "react";

import { icons } from "@/app/assets/icons";

export const Load = ({ ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      role="presentation"
      className="flex w-screen h-screen items-center justify-center bg-black opacity-[0.8] absolute top-0"
      {...rest}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <Image alt="Image logo" src={icons.circularSpinner} />
      </motion.div>
    </div>
  );
};
