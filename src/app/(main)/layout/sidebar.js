"use client";
import {
  Home,
  Lock,
  LogIn,
  ShoppingCart,
  Webhook,
  ChevronDown,
  ChevronUp,
  Siren,
} from "lucide-react";
import Link from "next/link";
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
];

export default function Sidebar() {
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
      <div className="flex-1">
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
                <div className="pl-6">
                  {item.subMenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.link}
                      className={
                        pathName === subItem.link
                          ? "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary bg-muted"
                          : "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-muted-foreground"
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
      </div>
    </>
  );
}
