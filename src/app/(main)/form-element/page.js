import { Label } from "@/app/ui/label";
import PageTitle from "@/components/pageTitle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function formElement() {
  return (
    <>
      <PageTitle title="Form Element" />

      <div className="grid grid-cols-3 gap-2">
        <Card className="">
          <CardHeader>
            <CardTitle className="text-md">Inputs</CardTitle>
            <CardDescription>npx shadcn-ui@latest add input</CardDescription>
          </CardHeader>
          <CardContent>
            <Input type="email" placeholder="Email" />

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">Picture</Label>
              <Input id="picture" type="file" />
            </div>
          </CardContent>
        </Card>

        <Card className="">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>

        <Card className="">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </>
  );
}
