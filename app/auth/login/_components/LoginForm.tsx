"use client";

import Link from "next/link";
import { Eye, EyeOff, Wrench } from "lucide-react";
import { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-8">
      <div className="flex justify-center">
        <div className="rounded-full bg-blue-100 p-4">
          <Wrench className="h-10 w-10 text-blue-600" />
        </div>
      </div>

      <div className="mt-5 text-center">
        <h1 className="text-3xl font-bold">🔧 FixItNow</h1>
        <p className="mt-2 text-gray-500">Welcome Back!</p>
      </div>

      <form className="mt-8 space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border px-4 py-3 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Password</label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full rounded-lg border px-4 py-3 pr-12 focus:border-blue-500 focus:outline-none"
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className="text-right">
          <Link
            href="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      <p className="mt-6 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-blue-600 hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
}