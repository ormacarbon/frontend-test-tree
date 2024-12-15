"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useMemo, useState } from "react";

interface IFormContextProps {
  formData: Record<string, any>;
  setFormData: (data: Record<string, any>) => void;
}

export const FormContext = createContext<IFormContextProps>({} as IFormContextProps);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<Record<string, any>>({});

  const value = useMemo(
    () => ({ formData, setFormData }),
    [formData, setFormData]
  );
  return (
    <FormContext.Provider value={value}>{children}</FormContext.Provider>
  );
};
