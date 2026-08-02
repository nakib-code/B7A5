"use client";

import { useState } from "react";
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

import { useCreateCategory } from "@/hooks/use-create-category";

type FormValues = {
  name: string;
  icon?: string;
  description?: string;
};

const CreateCategoryDialog = () => {
  const [open, setOpen] = useState(false);

  const { mutate, isPending } = useCreateCategory();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        setOpen(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger >
         Add Category
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Create Category
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
            placeholder="Icon URL (Optional)"
            {...register("icon")}
          />

          <Input
            placeholder="Description (Optional)"
            {...register("description")}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending
              ? "Creating..."
              : "Create Category"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCategoryDialog;