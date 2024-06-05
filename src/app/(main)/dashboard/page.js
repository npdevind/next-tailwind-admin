"use client";
import { Button } from "@/app/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  BriefcaseIcon,
  ChevronDownIcon,
  CpuIcon,
  DatabaseIcon,
  GaugeIcon,
  SmartphoneIcon,
  UsersIcon,
} from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
        <div className="max-w-6xl w-full mx-auto grid gap-6">
          <div className="grid grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="grid gap-1">
                  <CardTitle>Total Resources</CardTitle>
                  <CardDescription>Across the portfolio</CardDescription>
                </div>
                <UsersIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent className="text-4xl font-bold">1,234</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="grid gap-1">
                  <CardTitle>Utilization Rate</CardTitle>
                  <CardDescription>Across the portfolio</CardDescription>
                </div>
                <GaugeIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent className="text-4xl font-bold">82%</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="grid gap-1">
                  <CardTitle>Capacity</CardTitle>
                  <CardDescription>Across the portfolio</CardDescription>
                </div>
                <CpuIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent className="text-4xl font-bold">1,500</CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="grid gap-1">
                  <CardTitle>Project A</CardTitle>
                  <CardDescription>Web Development</CardDescription>
                </div>
                <BriefcaseIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <span>Utilization</span>
                    <span className="font-bold">92%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Capacity</span>
                    <span className="font-bold">120</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Available</span>
                    <span className="font-bold">10</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="grid gap-1">
                  <CardTitle>Project B</CardTitle>
                  <CardDescription>Mobile Development</CardDescription>
                </div>
                <SmartphoneIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <span>Utilization</span>
                    <span className="font-bold">78%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Capacity</span>
                    <span className="font-bold">90</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Available</span>
                    <span className="font-bold">20</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="grid gap-1">
                  <CardTitle>Project C</CardTitle>
                  <CardDescription>Data Engineering</CardDescription>
                </div>
                <DatabaseIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <span>Utilization</span>
                    <span className="font-bold">85%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Capacity</span>
                    <span className="font-bold">100</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Available</span>
                    <span className="font-bold">15</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Project Details</h2>
              <div className="flex items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="bg-white dark:bg-gray-950"
                    >
                      Filter <ChevronDownIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuCheckboxItem checked>
                      All Projects
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Web Development
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Mobile Development
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Data Engineering
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="bg-white dark:bg-gray-950"
                    >
                      Sort <ChevronDownIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuCheckboxItem checked>
                      Utilization
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Capacity
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Available
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <div className="grid gap-1">
                    <CardTitle>Project A</CardTitle>
                    <CardDescription>Web Development</CardDescription>
                  </div>
                  <BriefcaseIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <span>Utilization</span>
                      <span className="font-bold">92%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Capacity</span>
                      <span className="font-bold">120</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Available</span>
                      <span className="font-bold">10</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Team</span>
                      <span className="font-bold">Web Team</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Manager</span>
                      <span className="font-bold">Jane Doe</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <div className="grid gap-1">
                    <CardTitle>Project B</CardTitle>
                    <CardDescription>Mobile Development</CardDescription>
                  </div>
                  <SmartphoneIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <span>Utilization</span>
                      <span className="font-bold">78%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Capacity</span>
                      <span className="font-bold">90</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Available</span>
                      <span className="font-bold">20</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Team</span>
                      <span className="font-bold">Mobile Team</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Manager</span>
                      <span className="font-bold">John Smith</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <div className="grid gap-1">
                    <CardTitle>Project C</CardTitle>
                    <CardDescription>Data Engineering</CardDescription>
                  </div>
                  <DatabaseIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <span>Utilization</span>
                      <span className="font-bold">85%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Capacity</span>
                      <span className="font-bold">100</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Available</span>
                      <span className="font-bold">15</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Team</span>
                      <span className="font-bold">Data Team</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Manager</span>
                      <span className="font-bold">Sarah Lee</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
