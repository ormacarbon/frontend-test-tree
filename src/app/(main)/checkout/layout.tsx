export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex-1 flex flex-col  gap-[0.75rem]">{children}</div>;
}
