"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAdminUsers } from "@/hooks/use-admin-users";

import { useUpdateUserStatus } from "@/hooks/use-update-user-status";

type User = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  profileImg: string | null;
  role: "ADMIN" | "CUSTOMER" | "TECHNICIAN";
  status: "ACTIVE" | "BLOCKED";
  createdAt: string;
};

const UsersTable = () => {
  const { data: users = [], isLoading } = useAdminUsers();

  const { mutate, isPending } = useUpdateUserStatus();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          User Management
        </h1>

        <p className="text-muted-foreground">
          Manage all users from here.
        </p>
      </div>

      <div className="rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((user: User) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">
                  {user.name}
                </TableCell>

                <TableCell>{user.email}</TableCell>

                <TableCell>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
                    {user.role}
                  </span>
                </TableCell>

                <TableCell>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      user.status === "ACTIVE"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </TableCell>

                <TableCell className="text-right">
                  {user.role !== "ADMIN" && (
                    <Button
                      size="sm"
                      variant={
                        user.status === "ACTIVE"
                          ? "destructive"
                          : "default"
                      }
                      disabled={isPending}
                      onClick={() =>
                        mutate({
                          id: user.id,
                          status:
                            user.status === "ACTIVE"
                              ? "BLOCKED"
                              : "ACTIVE",
                        })
                      }
                    >
                      {user.status === "ACTIVE"
                        ? "Block"
                        : "Unblock"}
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UsersTable;