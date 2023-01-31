import React, { FC } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { classNames } from "@/utils";
import { useUser } from "@/context";
import { UsersRoleOptions } from "@/types";

export enum LinkName {
  Home = "Home",
  About = "About Santulan",
  CreateAccount = "Create Account",
  Login = "Login",

  Logout = "Logout",
  Users = "Users",
}
export interface ILink {
  name: LinkName;
  href: string;
}

const loggedOutLinks: ILink[] = [
  {
    name: LinkName.Home,
    href: "/",
  },
  {
    name: LinkName.About,
    href: "/about",
  },
  {
    name: LinkName.CreateAccount,
    href: "/create-account",
  },
  {
    name: LinkName.Login,
    href: "/login",
  },
];

const loggedInLinks: ILink[] = [
  {
    name: LinkName.Home,
    href: "/",
  },
  {
    name: LinkName.About,
    href: "/about",
  },
  {
    name: LinkName.Logout,
    href: "/logout",
  },
];

const adminLinks: ILink[] = [
  {
    name: LinkName.Users,
    href: "/users",
  },
];

interface Props {
  active: ILink["name"];
}

const NavBar: FC<Props> = ({ active }) => {
  const { user } = useUser();

  console.log(user);

  return (
    <div className={"h-20 bg-primary-600 xl:h-32"}>
      <div
        className={
          "flex h-full w-full flex-row items-center justify-between p-2.5 md:mx-auto md:max-w-7xl"
        }
      >
        <span className={"relative h-14 w-14 xl:h-20 xl:w-20"}>
          <Image src={Logo} alt={"Santulan Logo"} fill={true} />
        </span>

        <span
          className={"cursor-pointer rounded-md bg-primary-800 p-2 md:hidden"}
        >
          <Bars3Icon className={"h-6 w-6 text-white"} />
        </span>
        <div className={"hidden flex-row items-center md:flex"}>
          {user?.isLoggedIn
            ? loggedInLinks.map((link) => {
                return (
                  <Link
                    href={link.href}
                    key={link.name}
                    className={classNames(
                      active === link.name
                        ? "bg-primary-800"
                        : "bg-primary-600",
                      "rounded-md px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-800 md:py-3.5 md:text-base"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })
            : loggedOutLinks.map((outLink) => {
                return (
                  <Link
                    href={outLink.href}
                    key={outLink.name}
                    className={classNames(
                      active === outLink.name
                        ? "bg-primary-800"
                        : "bg-primary-600",
                      "rounded-md px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-800 md:py-3.5 md:text-base"
                    )}
                  >
                    {outLink.name}
                  </Link>
                );
              })}

          {/* admin links */}
          {user?.isLoggedIn &&
            user.role === UsersRoleOptions.admin &&
            adminLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className={classNames(
                  active === link.name ? "bg-primary-800" : "bg-primary-600",
                  "rounded-md px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-800 md:py-3.5 md:text-base"
                )}
              >
                {link.name}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export { NavBar };
