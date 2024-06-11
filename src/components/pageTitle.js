import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/ui/breadcrumb";
import { Terminal } from "lucide-react";
import Link from "next/link";

export default function PageTitle({ title, description = "" }) {
  return (
    <>
      <div className="flex flex-col mb-6">
        <h1 className="text-lg font-semibold md:text-2xl ">{title}</h1>
        {title != "Dashboard" && (
          <Breadcrumb className="hidden md:flex mb-1">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        )}

        {description && !Array.isArray(description) && (
          <span className="opacity-55 flex  text-sm">
            <Terminal className="h-6 w-4" /> {description}
          </span>
        )}

        {description && Array.isArray(description) && (
          <div className="flex flex-col mb-2">
            {description.map((item, index) => {
              return (
                <span className="opacity-55 flex text-sm" key={index}>
                  <Terminal className="h-6 w-4" /> {item}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
