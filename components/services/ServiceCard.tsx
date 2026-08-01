import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Service } from "@/types/service";

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">
          {service.title}
        </h2>

        <p className="text-sm text-muted-foreground">
          {service.description}
        </p>

        <div className="space-y-1 text-sm">
          <p>
            <span className="font-medium">Category:</span>{" "}
            {service.category.name}
          </p>

          <p>
            <span className="font-medium">Technician:</span>{" "}
            {service.technician.user.name}
          </p>

          <p>
            <span className="font-medium">Location:</span>{" "}
            {service.technician.location}
          </p>

          <p>
            <span className="font-medium">Price:</span> ৳
            {service.price}
          </p>
        </div>

        <Link href={`/services/${service.id}`}>
          <Button className="w-full">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}