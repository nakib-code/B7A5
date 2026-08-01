"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Service } from "@/types/service";
import { useUpdateService } from "@/hooks/use-update-service";

interface Props {
  service: Service;
}

interface FormData {
  title: string;
  description: string;
  price: number;
  duration: number;
}

export default function EditServiceDialog({
  service,
}: Props) {
  const { mutate, isPending } =
    useUpdateService();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>();

  useEffect(() => {
    reset({
      title: service.title,
      description: service.description,
      price: Number(service.price),
      duration: service.duration,
    });
  }, [service, reset]);

  const onSubmit = (values: FormData) => {
    mutate(
      {
        id: service.id,
        payload: values,
      },
      {
        onSuccess: () => {
          toast.success(
            "Service updated successfully"
          );
        },
      }
    );
  };

  return (
    <Dialog>
      <DialogTrigger >
          Edit
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Edit Service
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <Input
            placeholder="Title"
            {...register("title")}
          />

          <textarea
            rows={4}
            className="w-full rounded-md border p-3"
            {...register("description")}
          />

          <Input
            type="number"
            placeholder="Price"
            {...register("price", {
              valueAsNumber: true,
            })}
          />

          <Input
            type="number"
            placeholder="Duration"
            {...register("duration", {
              valueAsNumber: true,
            })}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending
              ? "Updating..."
              : "Update Service"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}