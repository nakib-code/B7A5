"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Camera, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { TechnicianProfile } from "@/types/technician";
import { useUpdateTechnicianProfile } from "@/hooks/use-update-technician-profile";
import { uploadImageToCloudinary } from "@/lib/cloudinary";

interface Props {
  profile: TechnicianProfile;
}

type FormValues = {
  bio: string;
  experience: number;
  location: string;
};

export default function ProfileForm({
  profile,
}: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);

  const [image, setImage] = useState(
    () => profile.user.profileImg || ""
  );

  const {
    mutate,
    isPending,
  } = useUpdateTechnicianProfile();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      bio: profile.bio || "",
      experience: profile.experience,
      location: profile.location,
    },
  });

  useEffect(() => {
    reset({
      bio: profile.bio || "",
      experience: profile.experience,
      location: profile.location,
    });
  }, [profile, reset]);

  const handleImageUpload = async (
    file: File
  ) => {
    try {
      setUploading(true);

      const url =
        await uploadImageToCloudinary(file);

      setImage(url);
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = (
    values: FormValues
  ) => {
    mutate({
      ...values,
      profileImg: image,
    });
  };

  return (
    <div className="rounded-xl border bg-white p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Edit Profile
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="relative h-36 w-36 overflow-hidden rounded-full border">
            <Image
              src={
                image ||
                "https://placehold.co/300x300/png?text=User"
              }
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>

          <Input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file =
                e.target.files?.[0];

              if (!file) return;

              handleImageUpload(file);
            }}
          />

          <Button
            type="button"
            variant="outline"
            disabled={uploading}
            onClick={() =>
              fileInputRef.current?.click()
            }
          >
            {uploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Camera className="mr-2 h-4 w-4" />
                Change Photo
              </>
            )}
          </Button>
        </div>

        <div>
          <label className="mb-2 block">
            Bio
          </label>

          <textarea
            rows={5}
            className="w-full rounded-md border p-3"
            {...register("bio")}
          />
        </div>

        <div>
          <label className="mb-2 block">
            Experience
          </label>

          <Input
            type="number"
            {...register("experience", {
              valueAsNumber: true,
            })}
          />
        </div>

        <div>
          <label className="mb-2 block">
            Location
          </label>

          <Input
            {...register("location")}
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={
            uploading || isPending
          }
        >
          {isPending
            ? "Saving..."
            : "Save Changes"}
        </Button>
      </form>
    </div>
  );
}