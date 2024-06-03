import { Label } from "@/app/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function signUp() {
  return (
    <>
      <div className="object-none object-center lg:min-h-[600px] xl:min-h-[800px]">
        <div className="flex items-center justify-center py-20 ">
          <Card className="w-auto shadow-lg">
            <CardContent>
              <div className="mx-auto grid w-[350px] gap-6 py-7">
                <div className="grid gap-2 text-center">
                  <h1 className="text-3xl font-bold">Sign up</h1>
                  <p className="text-balance text-muted-foreground text-sm">
                    Enter your details to create to a new account
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Full Name</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Confirm Password</Label>
                    <Input id="conPassword" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">
                    Signup
                  </Button>
                  <Button variant="outline" className="w-full">
                    Signup with Google
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link href="/auth/login" className="underline">
                    Log in
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
