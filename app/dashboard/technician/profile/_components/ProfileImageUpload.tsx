"use client";


import { Button } from "@/components/ui/button";
import { uploadImageToCloudinary } from "@/lib/cloudinary";

interface Props {
  onUpload: (url: string) => void;
}

export default function ProfileImageUpload({
  onUpload,
}: Props) {

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = e.target.files?.[0];

    if (!file) return;

    const url = await uploadImageToCloudinary(file);

    onUpload(url);

  };

  return (
    <div className="space-y-3">

      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
      />

      <Button
        type="button"
        variant="outline"
      >
        Upload Image
      </Button>

    </div>
  );
}