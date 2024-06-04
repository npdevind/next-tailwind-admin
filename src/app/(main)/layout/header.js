"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Badge,
  Box,
  ChevronDown,
  ChevronUp,
  CreditCard,
  FileLock2,
  Home,
  LineChart,
  Lock,
  LogIn,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Siren,
  Users,
  Webhook,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import userLogo from "../../../assets/user.png";

import LightAndDark from "./LightAndDark";
import Notification from "./Notification";
import Social from "./social";
import { usePathname } from "next/navigation";
import { useState } from "react";
const arrayCommonItem = [
  {
    item: "Dashboard",
    icon: <Home className="h-4 w-4" />,
    link: "/dashboard",
  },
  {
    item: "Charts",
    icon: <ShoppingCart className="h-4 w-4" />,
    link: "/charts",
  },
  {
    item: "Interface",
    icon: <Webhook className="h-4 w-4" />,
    link: "",
    subMenu: [
      {
        item: "Alerts",
        icon: <Siren className="h-4 w-4" />,
        link: "/interface/alerts",
      },
      {
        item: "Accordion",
        icon: <ChevronDown className="h-4 w-4" />,
        link: "/interface/accordion",
      },
      {
        item: "Badges",
        icon: <Badge className="h-4 w-4" />,
        link: "/interface/badges",
      },
      {
        item: "Buttons",
        icon: <Box className="h-4 w-4" />,
        link: "/interface/buttons",
      },
      {
        item: "Cards",
        icon: <CreditCard className="h-4 w-4" />,
        link: "/interface/cards",
      },
    ],
  },
];

const arrayAuthItem = [
  {
    item: "Log In",
    icon: <Lock className="h-4 w-4" />,
    link: "/auth/login",
  },
  {
    item: "Sign Up",
    icon: <LogIn className="h-4 w-4" />,
    link: "/auth/signup",
  },
  {
    item: "Forgot Password",
    icon: <FileLock2 className="h-4 w-4" />,
    link: "/auth/forgot-password",
  },
];

export default function Header() {
  const pathName = usePathname();
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleSubMenu = (index) => {
    setOpenSubMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <>
      <header className="flex h-14 items-center gap-1 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {arrayCommonItem.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.link}
                    className={
                      pathName === item.link
                        ? "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary bg-muted"
                        : "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-muted-foreground"
                    }
                    onClick={(e) => {
                      if (item.subMenu) {
                        e.preventDefault();
                        toggleSubMenu(index);
                      }
                    }}
                  >
                    {item.icon} {item.item}
                    {item.subMenu && (
                      <span className="ml-auto">
                        {openSubMenus[index] ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </span>
                    )}
                  </Link>
                  {item.subMenu && openSubMenus[index] && (
                    <div className="pl-6 mb-2">
                      {item.subMenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.link}
                          className={
                            pathName === subItem.link
                              ? "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary bg-muted"
                              : "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-muted-foreground "
                          }
                        >
                          {subItem.icon} {subItem.item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="border-t py-2">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                {arrayAuthItem.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className={
                      pathName === item.link
                        ? "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary bg-muted"
                        : "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-muted-foreground"
                    }
                  >
                    {item.icon} {item.item}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>

        <Notification />

        <LightAndDark />

        <Social />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Image
                src={userLogo}
                alt="Image"
                className="h-9 w-9 rounded-full"
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              <span>
                Nilmoni Patra
                <p className="text-xs">Web Developer</p>
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    </>
  );
}
