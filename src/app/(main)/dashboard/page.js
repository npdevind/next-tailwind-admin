import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IndianRupee } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <div className="flex">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <div className="flex rounded-lg ">
        <Card className="shadow w-60">
          <CardHeader>
            <CardTitle className="text-md">Weekly Sales</CardTitle>
            {/* <CardDescription className="text-xs">
              Calculated according to last week sales
            </CardDescription> */}
          </CardHeader>
          <CardContent>
            <div className="grid grid-rows-1 grid-flow-col gap-4">
              <div>
                <div className="flex flex-auto">
                  <IndianRupee className="w-4" />
                  <span className="text-2xl ">50k </span>
                </div>
                <Badge
                  variant="outline"
                  className="bg-green-300 border-0 opacity-75"
                >
                  +10.5%
                </Badge>
              </div>

              <div>09</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
