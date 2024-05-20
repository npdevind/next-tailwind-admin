"use client";
import {
  Home,
  LineChart,
  Lock,
  LogIn,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const arrayCommonItem = [
  {
    item: "Dashboard",
    icon: <Home className="h-4 w-4" />,
    link: "/dashboard",
  },
  {
    item: "Orders",
    icon: <ShoppingCart className="h-4 w-4" />,
    link: "/order",
  },

  {
    item: "Products",
    icon: <Package className="h-4 w-4" />,
    link: "/product",
  },
  {
    item: "Customers",
    icon: <Users className="h-4 w-4" />,
    link: "/customer",
  },
  {
    item: "Analytics",
    icon: <LineChart className="h-4 w-4" />,
    link: "/analytics",
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
  return (
    <>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {arrayCommonItem.map((item, index) => {
            return (
              <>
                <Link
                  href={item.link}
                  className={
                    pathName === item.link
                      ? "flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary bg-muted"
                      : "flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary text-muted-foreground "
                  }
                >
                  {item.icon} {item.item}
                </Link>
              </>
            );
          })}
        </nav>
        <div className="border-t py-2">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {arrayAuthItem.map((item, index) => {
              return (
                <>
                  <Link
                    href={item.link}
                    className={
                      pathName === item.link
                        ? "flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary bg-muted"
                        : "flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary text-muted-foreground "
                    }
                  >
                    {item.icon} {item.item}
                  </Link>
                </>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
