import Link from "next/link";
import Header from "./layout/header";
import { Package2 } from "lucide-react";
import Sidebar from "./layout/sidebar";

export default function RootLayout({ children }) {
  return (
    <>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="">Next Admin</span>
              </Link>
            </div>
            <Sidebar />
          </div>
        </div>
        <div className="flex flex-col ">
          <Header />
          <main className="flex-1 overflow-y-auto flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
