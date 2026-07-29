import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { decodeToken } from "@/lib/decode-token";

export default async function Home() {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("accessToken")?.value;

  if (!token) {
    redirect("/auth/login");
  }

  const user = decodeToken(token);

  switch (user.role) {
    case "ADMIN":
      redirect("/dashboard/admin");

    case "TECHNICIAN":
      redirect("/dashboard/technician");

    default:
      redirect("/dashboard/customer");
  }
}