import { Alert, AlertDescription, AlertTitle } from "@/app/ui/alert";
import PageTitle from "@/components/pageTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, ShieldAlert } from "lucide-react";

export default function alertInterFace() {
  return (
    <>
      <PageTitle title="Alerts" description="npx shadcn-ui@latest add alert" />

      <div className="grid gap-4 grid-cols-2 max-sm:grid-cols-1">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-md">Basic alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div>
                <Alert>
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing.
                  </AlertTitle>
                </Alert>
              </div>
              <div>
                <Alert className="border-green-600 text-green-600">
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing.
                  </AlertTitle>
                </Alert>
              </div>
              <div>
                <Alert className="border-sky-600 text-sky-600">
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing.
                  </AlertTitle>
                </Alert>
              </div>
              <div>
                <Alert variant="destructive">
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing.
                  </AlertTitle>
                </Alert>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-md">Alerts with icon</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div>
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing.
                  </AlertTitle>
                </Alert>
              </div>
              <div>
                <Alert className="border-green-600 text-green-600">
                  <Info className="h-4 w-4 !text-green-600" />
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing.
                  </AlertTitle>
                </Alert>
              </div>
              <div>
                <Alert className="border-sky-600 text-sky-600">
                  <Info className="h-4 w-4 !text-sky-600" />
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing.
                  </AlertTitle>
                </Alert>
              </div>
              <div>
                <Alert variant="destructive">
                  <ShieldAlert className="h-4 w-4" />
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing.
                  </AlertTitle>
                </Alert>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-md">Alert with a description</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div>
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription className="text-gray-600">
                    You can add components to your app using the cli.
                  </AlertDescription>
                </Alert>
              </div>
              <div>
                <Alert className="border-green-600 text-green-600">
                  <Info className="h-4 w-4 !text-green-600" />
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing.
                  </AlertTitle>
                  <AlertDescription className="text-gray-600">
                    You can add components to your app using the cli.
                  </AlertDescription>
                </Alert>
              </div>

              <div>
                <Alert className="border-sky-600 text-sky-600">
                  <Info className="h-4 w-4 !text-sky-600" />
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing.
                  </AlertTitle>
                  <AlertDescription className="text-gray-600">
                    You can add components to your app using the cli.
                  </AlertDescription>
                </Alert>
              </div>

              <div>
                <Alert variant="destructive">
                  <ShieldAlert className="h-4 w-4" />
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing.
                  </AlertTitle>
                  <AlertDescription className="text-gray-600">
                    You can add components to your app using the cli.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-md">Important alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div>
                <Alert className="bg-gray-600 text-white border-0">
                  <Info className="h-4 w-4 !text-white" />
                  <AlertTitle>Heads up!</AlertTitle>
                </Alert>
              </div>
              <div>
                <Alert className="bg-green-600 text-white border-0">
                  <Info className="h-4 w-4 !text-white" />
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing.
                  </AlertTitle>
                </Alert>
              </div>

              <div>
                <Alert className="bg-sky-600 text-white border-0">
                  <Info className="h-4 w-4 !text-white" />
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing.
                  </AlertTitle>
                </Alert>
              </div>

              <div>
                <Alert
                  variant="destructive"
                  className="bg-red-600 text-white border-0"
                >
                  <ShieldAlert className="h-4 w-4 !text-white" />
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing.
                  </AlertTitle>
                </Alert>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
