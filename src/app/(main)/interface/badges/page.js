import { Badge } from "@/app/ui/badge";
import PageTitle from "@/components/pageTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function badges() {
  return (
    <>
      <PageTitle title="Badge" description="npx shadcn-ui@latest add badge" />

      <Card className=" shadow-lg">
        <CardHeader>
          <CardTitle className="text-md">Shadcn Basic</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Badge>Badge</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-md">Custom</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Badge className="bg-blue-600 hover:bg-blue-600 rounded-sm">
              Badge
            </Badge>
            <Badge className="bg-indigo-600 hover:bg-indigo-600">Badge</Badge>

            <Badge variant="outline">Badge</Badge>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
