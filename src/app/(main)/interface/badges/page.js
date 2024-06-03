import { Badge } from "@/app/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function badges() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold md:text-2xl">Badge</h1>
        <span className="opacity-55">npx shadcn-ui@latest add badge</span>
      </div>

      <Card className=" shadow-lg">
        <CardHeader>
          <CardTitle className="text-md">Shadcn Basic</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex gap-4">
            <Badge>Badge</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-md">Custom</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex gap-4">
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
