"use client";

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useLogout } from "@/hooks/useLogout";


export default function DashboardNavbar() {
  const router = useRouter();

  const {
    user,
    isLoading,
  } = useCurrentUser();

  const {
    mutate: logout,
    isPending,
  } = useLogout();


  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        toast.success("Logout successful");

        router.replace("/auth/login");
        router.refresh();
      },
    });
  };


  const dashboardTitle = (() => {
    switch (user?.role) {
      case "ADMIN":
        return "Admin Dashboard";

      case "TECHNICIAN":
        return "Technician Dashboard";

      case "CUSTOMER":
        return "Customer Dashboard";

      default:
        return "Dashboard";
    }
  })();


  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">

      <div>
        <h2 className="text-xl font-semibold">
          {isLoading ? "Loading..." : dashboardTitle}
        </h2>

        <p className="text-sm text-gray-500">
          Welcome back!
        </p>
      </div>


      <div className="flex items-center gap-4">

        <div className="text-right">

          <p className="font-medium">
            {
              isLoading
                ? "Loading..."
                : user?.name ?? "User"
            }
          </p>


          <p className="text-sm text-gray-500">
            {user?.email ?? ""}
          </p>


          <p className="text-sm capitalize text-gray-500">
            {user?.role?.toLowerCase() ?? ""}
          </p>

        </div>


        <Button
          variant="destructive"
          onClick={handleLogout}
          disabled={isPending}
        >

          {
            isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Logging out...
              </>
            ) : (
              "Logout"
            )
          }

        </Button>


      </div>

    </header>
  );
}