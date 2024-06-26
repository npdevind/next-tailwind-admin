import { Label } from "@/app/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function Login() {
  return (
    <>
      <div className="object-none object-center lg:min-h-[600px] xl:min-h-[800px]">
        <div className="flex items-center justify-center py-20 ">
          <Card className="w-auto shadow-lg">
            <CardContent>
              <div className="mx-auto grid w-[350px] gap-6 py-7">
                <div className="grid gap-2 text-center">
                  <h1 className="text-3xl font-bold">Login</h1>
                  <p className="text-balance text-muted-foreground text-sm">
                    Enter your email below to login to your account
                  </p>
                </div>
                <div className="grid gap-4">
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
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        href="/auth/forgot-password"
                        className="ml-auto inline-block text-sm underline"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                  <Button variant="outline" className="w-full">
                    Login with Google
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/auth/signup" className="underline">
                    Sign up
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
