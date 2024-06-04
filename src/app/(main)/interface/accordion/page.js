import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlignJustify, BookAudio, Laugh, LayoutList } from "lucide-react";

export default function accordionInterFace() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold md:text-2xl">Accordion</h1>
        <span className="opacity-55">npx shadcn-ui@latest add accordion</span>
      </div>

      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Simple Accordion</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline">
                  Is it accessible?
                </AccordionTrigger>
                <AccordionContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="hover:no-underline">
                  Is it styled?
                </AccordionTrigger>
                <AccordionContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="hover:no-underline">
                  Is it animated?
                </AccordionTrigger>
                <AccordionContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Accordion With Icon</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex flex-auto gap-2">
                    <AlignJustify className="h-6 w-6" />
                    Is it accessible?
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex flex-auto gap-2">
                    <BookAudio className="h-6 w-6" />
                    Is it styled?
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex flex-auto gap-2">
                    <LayoutList className="h-6 w-6" />
                    Is it animated?
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
