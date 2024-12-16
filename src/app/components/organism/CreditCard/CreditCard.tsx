import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { CreditCardProps } from "./@types";
import { icons } from "@/app/assets/icons";
import { Text, Title } from "../../elements";

const formatCardNumber = (number: string) => {
  const digitsOnly = number.replace(/\D/g, "");
  return digitsOnly.replace(/(\d{4})(?=\d)/g, "$1 ");
};

export const CreditCard = ({
  security_code,
  year,
  name,
  month,
  number,
  className,
  notFlip = true,
}: CreditCardProps) => {
  const formattedNumber = formatCardNumber(number || "0000000000000000");

  return (
    <motion.div
      transition={{ duration: 0.7 }}
      animate={{ rotateY: notFlip ? 0 : 180 }}
      className={`flex w-full max-w-[35.1rem] h-[21.4rem] ${className}`}
    >
      <motion.div
        transition={{ duration: 0.7 }}
        animate={{ rotateY: notFlip ? 0 : 180 }}
        className={`flex flex-col w-full justify-between h-full background_credit_card p-[3.1rem] pb-0 ${
          !notFlip ? "px-[1.5rem]" : ""
        } `}
      >
        <motion.div
          className="face_card"
          transition={{ duration: 0.7 }}
          animate={{ rotateY: notFlip ? 0 : 180 }}
          style={{ display: !notFlip ? "none" : "block" }}
        >
          <div className="flex flex-col w-full justify-between h-full min-h-[14rem]">
            <div className="flex w-full h-fit justify-between items-center">
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0,
                }}
              >
                <div className="w-[7.2rem] h-[4.55rem] bg-background opacity-[0.44] rounded-[0.8rem]" />
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0,
                }}
              >
                <Image alt="Image chip" src={icons.chip} className="w-[8rem]" />
              </motion.span>
            </div>
            <div className="flex flex-col w-full h-fit justify-between items-center gap-[1.2rem]">
              <Title className="flex gap-[0.5rem] text-span font-normal text-[2.2rem]">
                {formattedNumber.split("").map((digit, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0,
                    }}
                  >
                    <Title className="text-span font-normal text-[2.2rem]">
                      {digit}
                    </Title>
                  </motion.span>
                ))}
              </Title>
              <div className="flex w-full h-fit justify-between items-center">
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0,
                  }}
                >
                  <Text className="text-span font-light text-[1.6rem]">
                    {name || "NOME"}
                  </Text>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0,
                  }}
                >
                  <Text className="text-span font-light text-[1.6rem]">
                    {month || "00"}/{year || "00"}
                  </Text>
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="face_card"
          initial={{ rotateY: 180 }}
          transition={{ duration: 0.7 }}
          animate={{ rotateY: notFlip ? 180 : 0 }}
          style={{ display: notFlip ? "none" : "block" }}
        >
          <div className="flex flex-col w-full justify-between h-full">
            <div className="w-[35rem] relative left-[-1.4rem] min-h-[5rem] bg-black mb-[2rem]" />
            <div className="flex flex-col items-end w-full h-full gap-1">
              <Text>CVV</Text>

              <div className="w-full flex items-center justify-end pr-[1rem] h-[5rem] bg-background rounded-2xl">
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0,
                  }}
                >
                  <Text>
                    {security_code || "000"}
                  </Text>{" "}
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};