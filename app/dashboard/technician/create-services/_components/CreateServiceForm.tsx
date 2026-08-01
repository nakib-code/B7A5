"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  useForm,
  SubmitHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useCategories } from "@/hooks/use-categories";
import { useCreateService } from "@/hooks/use-create-service";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const serviceSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters"),

  categoryId: z.string().min(1, "Category is required"),

  price: z.number().min(1, "Price is required"),

  duration: z.number().min(1, "Duration is required"),
});

type ServiceForm = z.infer<typeof serviceSchema>;

export default function CreateServiceForm() {
  const router = useRouter();

  const { data: categories } = useCategories();

  const { mutate, isPending } = useCreateService();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ServiceForm>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      title: "",
      description: "",
      categoryId: "",
      price: 0,
      duration: 0,
    },
  });

  const onSubmit: SubmitHandler<ServiceForm> = (
    values
  ) => {
    mutate(values, {
      onSuccess: () => {
        toast.success("Service created successfully");

        reset();

        router.push(
          "/dashboard/technician/services"
        );
      },

      onError: (error: any) => {
        toast.error(
          error?.response?.data?.message ??
            "Failed to create service"
        );
      },
    });
  };

  return (
    <div className="mx-auto max-w-3xl rounded-xl border bg-white p-8 shadow">
      <h1 className="mb-6 text-3xl font-bold">
        Create Service
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div>
          <Input
            placeholder="Service Title"
            {...register("title")}
          />

          {errors.title && (
            <p className="mt-1 text-sm text-red-500">
              {errors.title.message}
            </p>
          )}
        </div>

        <div>
          <textarea
            rows={5}
            placeholder="Service Description"
            className="w-full rounded-md border p-3"
            {...register("description")}
          />

          {errors.description && (
            <p className="mt-1 text-sm text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <select
            {...register("categoryId")}
            className="w-full rounded-md border p-3"
          >
            <option value="">
              Select Category
            </option>

            {categories?.map((category: any) => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.name}
              </option>
            ))}
          </select>

          {errors.categoryId && (
            <p className="mt-1 text-sm text-red-500">
              {errors.categoryId.message}
            </p>
          )}
        </div>

        <div>
          <Input
            type="number"
            placeholder="Price"
            {...register("price", {
              valueAsNumber: true,
            })}
          />

          {errors.price && (
            <p className="mt-1 text-sm text-red-500">
              {errors.price.message}
            </p>
          )}
        </div>

        <div>
          <Input
            type="number"
            placeholder="Duration (Minutes)"
            {...register("duration", {
              valueAsNumber: true,
            })}
          />

          {errors.duration && (
            <p className="mt-1 text-sm text-red-500">
              {errors.duration.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isPending}
        >
          {isPending
            ? "Creating..."
            : "Create Service"}
        </Button>
      </form>
    </div>
  );
}