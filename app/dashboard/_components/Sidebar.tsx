"use client";


import Link from "next/link";
import { useCurrentUser } from "@/hooks/use-current-user";


const menus = {

CUSTOMER:[
 {
  title:"Dashboard",
  href:"/dashboard/customer"
 },
 {
  title:"Services",
  href:"/services"
 },
 {
  title:"Bookings",
  href:"#"
 },
 {
  title:"Profile",
  href:"#"
 }
],


TECHNICIAN:[
 {
  title:"Dashboard",
  href:"/dashboard/technician"
 },
 {
  title:"My Services",
  href:"#"
 },
 {
  title:"Requests",
  href:"#"
 },
 {
  title:"Earnings",
  href:"#"
 }
],


ADMIN:[
 {
  title:"Dashboard",
  href:"/dashboard/admin"
 },
 {
  title:"Users",
  href:"#"
 },
 {
  title:"Services",
  href:"#"
 },
 {
  title:"Bookings",
  href:"#"
 }
]

};


export default function Sidebar(){


const user = useCurrentUser();


const items =
menus[user?.role ?? "CUSTOMER"];


return (

<aside className="hidden w-64 border-r bg-white md:block">


<div className="p-6">

<h1 className="text-2xl font-bold text-blue-600">
🔧 FixItNow
</h1>

</div>


<nav className="space-y-2 px-4">

{
items.map((item)=>(
<Link
key={item.title}
href={item.href}
className="block rounded-lg px-4 py-2 hover:bg-slate-100"
>

{item.title}

</Link>
))
}


</nav>


</aside>

);

}