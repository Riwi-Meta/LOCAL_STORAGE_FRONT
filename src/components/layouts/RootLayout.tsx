import { Outlet } from "react-router-dom";
import { SideNav } from "../ui/SideNav";
import { TopNav } from "../ui/TopNav";

export const RootLayout = () => {
  return (
    <main className="min-h-dvh w-screen bg-gray-300">
      <section className="flex ">
        <SideNav />
        <div className="w-full">
          <TopNav />
          <Outlet />
        </div>
      </section>
    </main>
  );
};
