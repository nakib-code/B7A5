"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, ShieldCheck, User } from "lucide-react";

import { useCurrentUser } from "@/hooks/use-current-user";

const Profile = () => {
  const { user, isLoading } = useCurrentUser();

  if (isLoading) {
    return (
      <div className="flex h-60 items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex h-60 items-center justify-center">
        User not found.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Header Card */}
      <Card className="overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-primary/80 to-primary" />

        <CardContent className="-mt-14 flex flex-col items-center px-8 pb-8">
          <Avatar className="h-28 w-28 border-4 border-background shadow-lg">
            <AvatarFallback className="text-4xl font-bold">
              {user.name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <h2 className="mt-4 text-2xl font-bold">
            {user.name}
          </h2>

          <p className="text-muted-foreground">
            {user.email}
          </p>

          <Badge className="mt-4">
            {user.role}
          </Badge>
        </CardContent>
      </Card>

      {/* Information */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <User size={24} />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Full Name
              </p>

              <p className="font-semibold">
                {user.name}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <Mail size={24} />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Email Address
              </p>

              <p className="font-semibold">
                {user.email}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <ShieldCheck size={24} />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Account Role
              </p>

              <Badge className="mt-2">
                {user.role}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;