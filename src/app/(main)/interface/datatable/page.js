import { Button } from "@/app/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/app/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/ui/table";
import PageTitle from "@/components/pageTitle";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "555-1234" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "555-5678" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "555-9012" },
  {
    id: 4,
    name: "Alice Williams",
    email: "alice@example.com",
    phone: "555-3456",
  },
  { id: 5, name: "Tom Davis", email: "tom@example.com", phone: "555-7890" },
  { id: 6, name: "Sarah Lee", email: "sarah@example.com", phone: "555-2345" },
  { id: 7, name: "Mike Brown", email: "mike@example.com", phone: "555-6789" },
  {
    id: 8,
    name: "Emily Wilson",
    email: "emily@example.com",
    phone: "555-0123",
  },
  {
    id: 9,
    name: "David Anderson",
    email: "david@example.com",
    phone: "555-4567",
  },
  {
    id: 10,
    name: "Olivia Taylor",
    email: "olivia@example.com",
    phone: "555-8901",
  },
];

export default function dataTable() {
  return (
    <>
      <PageTitle
        title="Data Tables"
        description={[
          "npx shadcn-ui@latest add table",
          "npx shadcn-ui@latest add pagination",
        ]}
      />

      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead className="w-[120px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-blue-600 hover:text-white"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-red-600 hover:text-white"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <div className="mb-2">
          <div className="flex justify-between">
            <div className="order-last ">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
            <div className="text-sm text-muted-foreground px-5">
              Showing 1 to 10 of 12 entries
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
