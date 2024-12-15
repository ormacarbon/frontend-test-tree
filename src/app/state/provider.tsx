import React, { ReactNode } from "react";
import { FormProvider } from "../context/formContext";

type ProviderType = {
  children: ReactNode;
};

const Provider: React.FC<ProviderType> = ({ children }) => {
  return (
      <FormProvider>{children}</FormProvider>
  );
};

export default Provider;
