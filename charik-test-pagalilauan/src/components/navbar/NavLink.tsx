import { Link, useLocation } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import "./navbar.css";
import { cn } from "../../lib/utils/cn";

export type NavLink = {
  id: number;
  title: string;
  path?: string;
  subitems?: NavLinkMenuItems[];
};

export type NavLinkMenuItems = {
  id: number;
  title: string;
  path?: string;
};

const NavLink = ({ title, path, subitems }: NavLink) => {
  const location = useLocation();
  const { pathname } = location;

  if (!path && subitems) {
    return (
      <Menu
        as="a"
        className={cn(
          "relative inline-block text-left custom-link select-none",
          subitems?.some((item) => item.path === pathname) && "active"
        )}
      >
        <div>
          <MenuButton className="inline-flex w-full items-center gap-x-1.5 hover-underline-animation">
            {title}
            <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className=" absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="flex flex-col">
            {subitems?.map((item) => {
              return (
                <Link
                  to={item.path || ""}
                  key={item.id}
                  className={cn(
                    "py-3 px-6 hover:bg-gray-100 transition-colors [&:not(:last-child)]:border-b-[1px] border-custom-text/10",
                    item.path == pathname && "bg-gray-100 font-semibold "
                  )}
                >
                  <MenuItem as="div">{item.title}</MenuItem>
                </Link>
              );
            })}
          </div>
        </MenuItems>
      </Menu>
    );
  } else {
    return (
      <Link
        to={path || ""}
        className={cn("select-none custom-link", path == pathname && "active")}
      >
        <li className="hover-underline-animation">{title}</li>
      </Link>
    );
  }
};

export default NavLink;
