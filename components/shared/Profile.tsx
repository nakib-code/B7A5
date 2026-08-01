"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCurrentUser } from "@/hooks/use-current-user";

const Profile = () => {
  const { user, isLoading } = useCurrentUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <div className="mx-auto max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>My Profile</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground">Name</p>
            <h2 className="text-lg font-semibold">{user.name}</h2>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p>{user.email}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Role</p>
            <Badge variant="secondary">{user.role}</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;