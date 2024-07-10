import { Avatar, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useMatch } from "react-router-dom";

export const TopNav = () => {
  const match = useMatch("/:childPath/*");
  const childPath = match?.params.childPath ?? "/";

  return (
    <Navbar
      isBordered
      classNames={{
        wrapper: "max-w-full ",
      }}
      className=" flex items-center justify-between px-4 border-1.5"
    >
      <NavbarContent justify="start">
        <NavbarItem>
          <h2 className="capitalize font-bold text-xl">{childPath === "/" ? "Dashboard" : childPath}</h2>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <figure className="flex items-center gap-2">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <div className="flex flex-col items-center justify-center">
              <span className="font-bold">Sebastian</span>
              <span className="text-sm text-gray-400">El chamo</span>
            </div>
          </figure>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
