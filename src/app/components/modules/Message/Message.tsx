import Image from "next/image";
import { Button, Text, Title } from "../../elements";
import { Props } from "./@types";
import { Header } from "../Header";

export const Message = ({
  icon,
  title,
  status,
  message,
  subTitle,
  className,
  textButton,
  handleClick,
  loading = false,
}: Props) => {
  return (
    <div className="gap-24 top-0 w-screen h-auto min-h-screen flex flex-col bg-background p-8 lg:px-36 lg:pt-36 print-message">
      <Header />
      <div
        className={`flex justify-between items-center flex-col-reverse lg:flex-row gap-y-[6rem] ${className}`}
      >
        <div className="flex flex-col items-start w-auto gap-10">
          <Title className={`text-[4.8rem] ${status === 'error' ? 'text-error' : 'text-title'}`}>{title}</Title>
          <Title className={`text-[3.2rem] max-w-[43.7rem] text-start ${status === 'error' ? 'text-error' : 'text-title'}`}>
            {subTitle}
          </Title>

          <div className="flex flex-col gap-8">
            {message.length > 0 &&
              message?.map((item, index) => {
                const key = `${item}_${index}`;
                return (
                  <Text
                    key={key}
                    className="text-span font-medium text-[2rem] max-w-[43.7rem]"
                  >
                    {item}
                  </Text>
                );
              })}
          </div>

          <Button
            loading={loading}
            disabled={loading}
            onClick={handleClick}
            className={`btn mt-12 bg-button w-full max-w-[28.5rem] min-h-[39px] text-background border-none`}
          >
            <Text
              
              className="text-current group-hover:text-background"
            >
              {textButton}
            </Text>
          </Button>
        </div>

        <div className="flex items-center justify-center size-[90dvw] min-h-[17.1rem] min-w-[17.1rem] max-w-[54.4rem] max-h-[54.4rem] rounded-[54.4rem] bg-circle p-10 lg:size-[100dvw]">
          <Image
            src={icon}
            alt="Icon status"
            className="w-full max-w-[43.699rem] print-max-width"
          />
        </div>
      </div>
    </div>
  );
};
