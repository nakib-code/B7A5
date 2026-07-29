"use client";

import { useRouter } from "next/navigation";

import { clearTokens } from "@/lib/auth";
import { useCurrentUser } from "@/hooks/use-current-user";

import { Button } from "@/components/ui/button";

export default function DashboardNavbar() {
  const router = useRouter();

  const user = useCurrentUser();

  const logout = () => {
    clearTokens();
    router.push("/auth/login");
  };

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h2 className="text-xl font-semibold">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="font-medium">
            {user?.email}
          </p>

          <p className="text-sm capitalize text-gray-500">
            {user?.role?.toLowerCase()}
          </p>
        </div>

        <Button
          variant="destructive"
          onClick={logout}
        >
          Logout
        </Button>
      </div>
    </header>
  );
}