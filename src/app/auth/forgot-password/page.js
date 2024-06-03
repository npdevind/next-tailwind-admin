import { Label } from "@/app/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default function forgotPassword() {
  return (
    <>
      <div className="object-none object-center lg:min-h-[600px] xl:min-h-[800px]">
        <div className="flex items-center justify-center py-20 ">
          <Card className="w-auto shadow-lg">
            <CardContent>
              <div className="mx-auto grid w-[350px] gap-6 py-7">
                <div className="grid gap-2 text-center">
                  <h1 className="text-3xl font-bold">Forgot password</h1>
                  <p className="text-balance text-muted-foreground text-sm">
                    Enter your email address and your password will be reset and
                    emailed to you.
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
                  <Button type="submit" className="w-full gap-2 bg-blue-600">
                    <Send className="h-4 w-4" /> Send me new password
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
