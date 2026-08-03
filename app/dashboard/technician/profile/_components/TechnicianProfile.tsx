"use client";

import { useMyTechnicianProfile } from "@/hooks/use-my-technician-profile";
import { Loader2 } from "lucide-react";
import ProfileHeader from "./ProfileHeader";
import ProfileForm from "./ProfileForm";



export default function TechnicianProfile() {
  const {
    data: profile,
    isLoading,
    isError,
  } = useMyTechnicianProfile();

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (isError || !profile) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        Failed to load profile.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">

      <ProfileHeader profile={profile} />

      <ProfileForm profile={profile} />

    </div>
  );
}