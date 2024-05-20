import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Dashboard() {
  return (
    <>
      <div className="flex">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <div
        className="flex rounded-lg  shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <Card>
          <CardHeader>
            <CardTitle>Weekly Sales</CardTitle>
            <CardDescription>
              Calculated according to last week sales
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
