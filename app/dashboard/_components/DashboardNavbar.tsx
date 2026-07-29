"use client";


import { clearTokens } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/hooks/use-current-user";


export default function DashboardNavbar(){

const router = useRouter();

const user = useCurrentUser();


const logout = ()=>{

 clearTokens();

 router.push("/auth/login");

};


return (

<header className="flex h-16 items-center justify-between border-b bg-white px-6">


<div>

<h2 className="text-xl font-semibold">
 Dashboard
</h2>

</div>


<div className="flex items-center gap-4">


<div className="text-right">

<p className="font-medium">
{user?.email}
</p>

<p className="text-sm text-gray-500">
{user?.role}
</p>

</div>


<button
onClick={logout}
className="rounded-lg bg-red-500 px-4 py-2 text-white"
>
Logout
</button>


</div>


</header>

);

}