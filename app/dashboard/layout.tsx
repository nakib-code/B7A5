import Sidebar from "./_components/Sidebar";
import DashboardNavbar from "./_components/DashboardNavbar";
import { ReactNode } from "react";


export default function DashboardLayout({
children
}:{
children:ReactNode
}){


return (

<div className="flex min-h-screen bg-slate-100">


<Sidebar />


<main className="flex-1">


<DashboardNavbar />


<section className="p-6">

{children}

</section>


</main>


</div>

)

}