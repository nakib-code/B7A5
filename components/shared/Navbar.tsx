"use client";

import Link from "next/link";
import { Menu, Wrench } from "lucide-react";

import { useCurrentUser } from "@/hooks/use-current-user";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { user, isLoading } = useCurrentUser();

  console.log({
  user,
  isLoading,
});

  const navLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/services",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Wrench className="h-7 w-7 text-blue-600" />
          <span className="text-xl font-bold">FixItNow</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium transition hover:text-blue-600"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          {isLoading ? null : user ? (
            <Link href={`/dashboard/${user.role.toLowerCase()}`}>
              <Button>Dashboard</Button>
            </Link>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="outline">
                  Login
                </Button>
              </Link>

              <Link href="/auth/register">
                <Button>
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-100">
              <Menu className="h-6 w-6" />
            </SheetTrigger>

            <SheetContent side="right">
              <div className="mt-8 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                ))}

                <hr />

                {isLoading ? null : user ? (
                  <Link
                    href={`/dashboard/${user.role.toLowerCase()}`}
                  >
                    <Button className="w-full">
                      Dashboard
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link href="/auth/login">
                      <Button
                        variant="outline"
                        className="w-full"
                      >
                        Login
                      </Button>
                    </Link>

                    <Link href="/auth/register">
                      <Button className="w-full">
                        Register
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}