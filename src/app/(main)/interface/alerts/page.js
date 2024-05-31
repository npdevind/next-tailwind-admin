import { Alert, AlertDescription, AlertTitle } from "@/app/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CheckCheck, ShieldAlert, Terminal } from "lucide-react";

export default function alertInterFace() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold md:text-2xl">Alerts</h1>
        <span className="opacity-55">npx shadcn-ui@latest add alert</span>
      </div>

      <div className="grid gap-4 grid-cols-2">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-md">Basic alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="flex flex-col space-y-4">
              <div>
                <Alert>
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </AlertTitle>
                </Alert>
              </div>
              <div>
                <Alert className="border-green-600 text-green-600">
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </AlertTitle>
                </Alert>
              </div>
              <div>
                <Alert className="border-sky-600 text-sky-600">
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </AlertTitle>
                </Alert>
              </div>
              <div>
                <Alert variant="destructive">
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </AlertTitle>
                </Alert>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-md">Alerts with icon</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="flex flex-col space-y-4">
              <div>
                <Alert>
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </AlertTitle>
                </Alert>
              </div>
              <div>
                <Alert className="border-green-600 text-green-600">
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </AlertTitle>
                </Alert>
              </div>
              <div>
                <Alert className="border-sky-600 text-sky-600">
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </AlertTitle>
                </Alert>
              </div>
              <div>
                <Alert variant="destructive">
                  <ShieldAlert className="h-4 w-4" />
                  <AlertTitle>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </AlertTitle>
                </Alert>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-md">Dismissible alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-md">Alert with a description</CardTitle>
          </CardHeader>
          <CardContent>
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>

        {/* <div>
          <h5 className="mb-3">1. Default Alert</h5>
        </div>

        <div>
          <h5 className="mb-3">2. Success Alert</h5>
          <Alert className="border-green-600 text-green-600">
            <CheckCheck className="h-4 w-4 text-green-600" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
        </div>

        <div>
          <h5 className="mb-3">3. Danger Alert</h5>
          <Alert variant="destructive">
            <ShieldAlert className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
        </div> */}
      </div>
    </>
  );
}
