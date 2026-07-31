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

import { loginSchema, LoginValues } from "@/schemas/auth.schema";
import { setTokens } from "@/lib/auth";
import { useLogin } from "@/hooks/use-login";

export default function LoginForm() {
  const router = useRouter();
  const { mutateAsync, isPending } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginValues) => {
  try {
    const response = await mutateAsync(values);

    const { accessToken, refreshToken } = response.data;

    setTokens(accessToken, refreshToken);

    toast.success(response.message);

    router.push("/");
    router.refresh();
  } catch (error: any) {
    toast.error(
      error?.response?.data?.message || "Login Failed"
    );
  }
};

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
      <div className="flex justify-center">
        <div className="rounded-full bg-blue-100 p-4">
          <Wrench className="h-10 w-10 text-blue-600" />
        </div>
      </div>

      <div className="mt-5 text-center">
        <h1 className="text-3xl font-bold">
          🔧 FixItNow
        </h1>

        <p className="mt-2 text-gray-500">
          Welcome Back!
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-5"
      >
        <div>
          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Password
          </label>

          <div className="relative">
            <Input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Enter password"
              className="pr-10"
              {...register("password")}
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />

              Logging in...
            </>
          ) : (
            "Login"
          )}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link
          href="/auth/register"
          className="font-semibold text-blue-600"
        >
          Register
        </Link>
      </p>
    </div>
  );
}