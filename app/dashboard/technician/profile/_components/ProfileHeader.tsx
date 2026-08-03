"use client";

import Image from "next/image";

import { MapPin, Star, Briefcase } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { TechnicianProfile } from "@/types/technician";

interface Props {
  profile: TechnicianProfile;
}

export default function ProfileHeader({
  profile,
}: Props) {
  return (
    <Card>

      <CardContent className="flex flex-col items-center gap-6 p-8 md:flex-row">

        <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary">

          <Image
            src={
              profile.user.profileImg ||
              "https://placehold.co/300x300/png?text=User"
            }
            alt={profile.user.name}
            fill
            className="object-cover"
          />

        </div>

        <div className="flex-1 space-y-3">

          <div>

            <h2 className="text-3xl font-bold">
              {profile.user.name}
            </h2>

            <p className="text-muted-foreground">
              {profile.user.email}
            </p>

          </div>

          <div className="grid gap-3 md:grid-cols-2">

            <div className="flex items-center gap-2">

              <MapPin className="h-5 w-5 text-primary" />

              <span>
                {profile.location}
              </span>

            </div>

            <div className="flex items-center gap-2">

              <Briefcase className="h-5 w-5 text-primary" />

              <span>
                {profile.experience} Years Experience
              </span>

            </div>

            <div className="flex items-center gap-2">

              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

              <span>
                {profile.averageRating.toFixed(1)} Rating
              </span>

            </div>

            <div className="flex items-center gap-2">

              <Briefcase className="h-5 w-5 text-primary" />

              <span>
                {profile.completedJobs} Jobs Completed
              </span>

            </div>

          </div>

          {profile.bio && (
            <p className="pt-2 text-muted-foreground">
              {profile.bio}
            </p>
          )}

        </div>

      </CardContent>

    </Card>
  );
}