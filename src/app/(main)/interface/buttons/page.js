import PageTitle from "@/components/pageTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function interfaceButton() {
  return (
    <>
      <PageTitle
        title="Buttons"
        description="npx shadcn-ui@latest add button"
      />

      <Card className="">
        <CardHeader>
          <CardTitle>Standard Buttons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-8 gap-4">
            <Button className="bg-[color:var(--primary-color)]">button</Button>
            <Button className="bg-[color:var(--success-color)]">button</Button>
            <Button className="bg-[color:var(--secondary-color)]">
              button
            </Button>
            <Button className="bg-[color:var(--info-color)]">button</Button>
            <Button className="bg-[color:var(--danger-color)]">button</Button>
            <Button className="bg-[color:var(--warning-color)] text-[color:var(--warning-dark)] hover:text-white">
              button
            </Button>
            <Button className="bg-[color:var(--light-color)] text-[color:var(--warning-dark)] hover:text-white">
              button
            </Button>
            <Button>button</Button>
          </div>
        </CardContent>

        <CardHeader>
          <CardTitle>Standard Disabled Buttons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-8 gap-4">
            <Button disabled className="bg-[color:var(--primary-color)]">
              button
            </Button>
            <Button disabled className="bg-[color:var(--success-color)]">
              button
            </Button>
            <Button disabled className="bg-[color:var(--secondary-color)]">
              button
            </Button>
            <Button disabled className="bg-[color:var(--info-color)]">
              button
            </Button>
            <Button disabled className="bg-[color:var(--danger-color)]">
              button
            </Button>
            <Button
              disabled
              className="bg-[color:var(--warning-color)] text-[color:var(--warning-dark)] hover:text-white"
            >
              button
            </Button>
            <Button
              disabled
              className="bg-[color:var(--light-color)] text-[color:var(--warning-dark)] hover:text-white"
            >
              button
            </Button>
            <Button disabled>button</Button>
          </div>
        </CardContent>

        <CardHeader>
          <CardTitle>Outline Buttons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-8 gap-4">
            <Button
              variant="outline"
              className="border-[color:var(--primary-color)] hover:bg-[color:var(--primary-color)] hover:text-white"
            >
              button
            </Button>
            <Button
              variant="outline"
              className="border-[color:var(--success-color)] hover:bg-[color:var(--success-color)] hover:text-white"
            >
              button
            </Button>
            <Button
              variant="outline"
              className="border-[color:var(--secondary-color)] hover:bg-[color:var(--secondary-color)] hover:text-white"
            >
              button
            </Button>
            <Button
              variant="outline"
              className="border-[color:var(--info-color)] hover:bg-[color:var(--info-color)] hover:text-white"
            >
              button
            </Button>
            <Button
              variant="outline"
              className="border-[color:var(--danger-color)] hover:bg-[color:var(--danger-color)] hover:text-white"
            >
              button
            </Button>
            <Button
              variant="outline"
              className="border-[color:var(--warning-color)] hover:bg-[color:var(--warning-color)] hover:text-black"
            >
              button
            </Button>
            <Button
              variant="outline"
              className="border-[color:var(--light-color)] text-[color:var(--warning-dark)] "
            >
              button
            </Button>
            <Button variant="outline">button</Button>
          </div>
        </CardContent>

        <CardHeader>
          <CardTitle>Outline Disabled Buttons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-8 gap-4">
            <Button
              variant="outline"
              disabled
              className="border-[color:var(--primary-color)] hover:bg-[color:var(--primary-color)] hover:text-white"
            >
              button
            </Button>
            <Button
              variant="outline"
              disabled
              className="border-[color:var(--success-color)] hover:bg-[color:var(--success-color)] hover:text-white"
            >
              button
            </Button>
            <Button
              variant="outline"
              disabled
              className="border-[color:var(--secondary-color)] hover:bg-[color:var(--secondary-color)] hover:text-white"
            >
              button
            </Button>
            <Button
              variant="outline"
              disabled
              className="border-[color:var(--info-color)] hover:bg-[color:var(--info-color)] hover:text-white"
            >
              button
            </Button>
            <Button
              variant="outline"
              disabled
              className="border-[color:var(--danger-color)] hover:bg-[color:var(--danger-color)] hover:text-white"
            >
              button
            </Button>
            <Button
              variant="outline"
              disabled
              className="border-[color:var(--warning-color)] hover:bg-[color:var(--warning-color)] hover:text-white"
            >
              button
            </Button>
            <Button
              variant="outline"
              disabled
              className="border-[color:var(--light-color)] text-[color:var(--warning-dark)] "
            >
              button
            </Button>
            <Button variant="outline" disabled>
              button
            </Button>
          </div>
        </CardContent>

        <CardHeader>
          <CardTitle>Ghost Buttons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-8 gap-4">
            <Button className="bg-transparent text-[color:var(--primary-color)] hover:bg-[color:var(--primary-color)] hover:text-white">
              button
            </Button>
            <Button className="bg-transparent text-[color:var(--secondary-color)] hover:bg-[color:var(--secondary-color)] hover:text-white">
              button
            </Button>
            <Button className="bg-transparent text-[color:var(--info-color)] hover:bg-[color:var(--info-color)] hover:text-white">
              button
            </Button>
            <Button className="bg-transparent text-[color:var(--success-color)] hover:bg-[color:var(--success-color)] hover:text-white">
              button
            </Button>
            <Button className="bg-transparent text-[color:var(--warning-color)] hover:bg-[color:var(--warning-color)] hover:text-black">
              button
            </Button>
            <Button className="bg-transparent text-[color:var(--danger-color)] hover:bg-[color:var(--danger-color)] hover:text-white">
              button
            </Button>
            <Button className="bg-transparent text-[color:var(--light-dark)] hover:bg-[color:var(--light-color)] hover:text-black">
              button
            </Button>
            <Button className="bg-transparent text-[color:var(--dark-color)] hover:bg-[color:var(--dark-color)] hover:text-white">
              button
            </Button>
          </div>
        </CardContent>

        <CardHeader>
          <CardTitle>Square Buttons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-8 gap-4">
            <Button className="rounded-none bg-[color:var(--primary-color)]">
              button
            </Button>
            <Button className="rounded-none bg-[color:var(--success-color)]">
              button
            </Button>
            <Button className="rounded-none bg-[color:var(--secondary-color)]">
              button
            </Button>
            <Button className="rounded-none bg-[color:var(--info-color)]">
              button
            </Button>
            <Button className="rounded-none bg-[color:var(--danger-color)]">
              button
            </Button>
            <Button className="rounded-none bg-[color:var(--warning-color)] text-[color:var(--warning-dark)] hover:text-white">
              button
            </Button>
            <Button className="rounded-none bg-[color:var(--light-color)] text-[color:var(--dark-color)] hover:text-white">
              button
            </Button>
            <Button className="rounded-none">button</Button>
          </div>
        </CardContent>

        <CardHeader>
          <CardTitle>Pill Buttons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-8 gap-4">
            <Button className="rounded-2xl bg-[color:var(--primary-color)]">
              button
            </Button>
            <Button className="rounded-2xl bg-[color:var(--success-color)]">
              button
            </Button>
            <Button className="rounded-2xl bg-[color:var(--secondary-color)]">
              button
            </Button>
            <Button className="rounded-2xl bg-[color:var(--info-color)]">
              button
            </Button>
            <Button className="rounded-2xl bg-[color:var(--danger-color)]">
              button
            </Button>
            <Button className="rounded-2xl bg-[color:var(--warning-color)] text-[color:var(--warning-dark)] hover:text-white">
              button
            </Button>
            <Button className="rounded-2xl bg-[color:var(--light-color)] text-black hover:text-white">
              button
            </Button>
            <Button className="rounded-2xl">button</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
