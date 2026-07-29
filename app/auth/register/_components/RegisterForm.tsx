"use client";

import Link from "next/link";
import { Eye, EyeOff, Wrench } from "lucide-react";
import { useState } from "react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
      {/* Logo */}
      <div className="flex justify-center">
        <div className="rounded-full bg-blue-100 p-4">
          <Wrench className="h-10 w-10 text-blue-600" />
        </div>
      </div>

      {/* Heading */}
      <div className="mt-5 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Create Account
        </h1>
        <p className="mt-2 text-gray-500">
          Join FixItNow today
        </p>
      </div>

      <form className="mt-8 space-y-5">
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full rounded-lg border px-4 py-3 pr-12 outline-none focus:border-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Confirm Password
          </label>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="w-full rounded-lg border px-4 py-3 pr-12 outline-none focus:border-blue-500"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showConfirmPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Role */}
        <div>
          <label className="mb-3 block text-sm font-medium">
            Select Role
          </label>

          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value="CUSTOMER"
                defaultChecked
              />
              Customer
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value="TECHNICIAN"
              />
              Technician
            </label>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Create Account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-blue-600 hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
}