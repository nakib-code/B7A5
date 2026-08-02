"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useUpdateCategory } from "@/hooks/use-update-category";

type Category = {
  id: string;
  name: string;
  icon?: string;
  description?: string;
};

interface Props {
  category: Category;
}

type FormValues = {
  name: string;
  icon?: string;
  description?: string;
};

const UpdateCategoryDialog = ({
  category,
}: Props) => {
  const [open, setOpen] = useState(false);

  const { mutate, isPending } =
    useUpdateCategory();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormValues>();

  useEffect(() => {
    if (open) {
      reset({
        name: category.name,
        icon: category.icon || "",
        description:
          category.description || "",
      });
    }
  }, [open, category, reset]);

  const onSubmit = (data: FormValues) => {
    mutate(
      {
        id: category.id,
        payload: data,
      },
      {
        onSuccess: () => {
          setOpen(false);
        },
      }
    );
  };

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger >
          Edit
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Update Category
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <Input
            placeholder="Category Name"
            {...register("name", {
              required: true,
            })}
          />

          <Input
            placeholder="Icon URL"
            {...register("icon")}
          />

          <Input
            placeholder="Description"
            {...register("description")}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending
              ? "Updating..."
              : "Update Category"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateCategoryDialog;