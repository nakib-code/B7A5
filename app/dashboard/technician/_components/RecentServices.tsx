import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type Service = {
  id: string;
  title: string;
  price: string | number;
  isAvailable: boolean;
  category?: {
    name: string;
  };
};

type Props = {
  services: Service[];
};

const RecentServices = ({ services }: Props) => {
  return (
    <div className="rounded-xl border bg-background p-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">My Recent Services</h2>
        <p className="text-sm text-muted-foreground">
          Your latest created services
        </p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Service</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {services.length > 0 ? (
            services.map((service) => (
              <TableRow key={service.id}>
                <TableCell className="font-medium">
                  {service.title}
                </TableCell>

                <TableCell>
                  {service.category?.name ?? "N/A"}
                </TableCell>

                <TableCell>৳ {service.price}</TableCell>

                <TableCell>
                  <Badge
                    variant={
                      service.isAvailable ? "default" : "destructive"
                    }
                  >
                    {service.isAvailable ? "Available" : "Unavailable"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="py-8 text-center">
                No services found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentServices;