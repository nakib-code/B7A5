"use client";

import Link from "next/link";
import { Eye, EyeOff, Loader2, Wrench } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  registerSchema,
  RegisterValues,
} from "@/schemas/auth.schema";

import { registerUser } from "@/services/auth/auth.api";

export default function RegisterForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      role: "CUSTOMER",
    },
  });

  const onSubmit = async (values: RegisterValues) => {
    try {
      setLoading(true);

      const res = await registerUser(values);

      toast.success(res.message);

      router.push("/auth/login");
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ??
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
      <div className="flex justify-center">
        <div className="rounded-full bg-blue-100 p-4">
          <Wrench className="h-10 w-10 text-blue-600" />
        </div>
      </div>

      <h1 className="mt-5 text-center text-3xl font-bold">
        Create Account
      </h1>

      <p className="mt-2 text-center text-gray-500">
        Join FixItNow
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-5"
      >
        {/* Name */}

        <div>
          <label>Name</label>

          <Input
            {...register("name")}
            placeholder="Your Name"
          />

          {errors.name && (
            <p className="text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}

        <div>
          <label>Email</label>

          <Input
            {...register("email")}
            placeholder="Email"
          />

          {errors.email && (
            <p className="text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}

        <div>
          <label>Password</label>

          <div className="relative">
            <Input
              type={
                showPassword ? "text" : "password"
              }
              {...register("password")}
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-3 top-3"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          {errors.password && (
            <p className="text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}

        <div>
          <label>Confirm Password</label>

          <div className="relative">
            <Input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              {...register("confirmPassword")}
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="absolute right-3 top-3"
            >
              {showConfirmPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          {errors.confirmPassword && (
            <p className="text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Role */}

        <div>
          <label className="mb-2 block">
            Select Role
          </label>

          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="CUSTOMER"
                {...register("role")}
              />

              Customer
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="TECHNICIAN"
                {...register("role")}
              />

              Technician
            </label>
          </div>

          {errors.role && (
            <p className="text-sm text-red-500">
              {errors.role.message}
            </p>
          )}
        </div>

        <Button
          disabled={loading}
          className="w-full"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating...
            </>
          ) : (
            "Create Account"
          )}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="font-semibold text-blue-600"
        >
          Login
        </Link>
      </p>
    </div>
  );
}