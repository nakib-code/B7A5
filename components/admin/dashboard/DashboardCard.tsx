import { ReactNode } from "react";

type DashboardCardProps = {
  title: string;
  value: number | string;
  icon: ReactNode;
};

const DashboardCard = ({
  title,
  value,
  icon,
}: DashboardCardProps) => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>

          <h2 className="mt-2 text-3xl font-bold">{value}</h2>
        </div>

        <div className="rounded-full bg-primary/10 p-3 text-primary">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;