import SideElement from "@/components/blog/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-white my-8  px-4 pt-8 md:flex-row  md:gap-16">
      {children}
      <SideElement />
    </div>
  );
}
