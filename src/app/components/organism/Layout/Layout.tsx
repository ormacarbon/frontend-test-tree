import { LayoutProps } from "./@types";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-between bg-background">
      <div className="w-full h-auto items-center justify-items-center min-h-screen">
        {children}
      </div>
    </div>
  );
};
