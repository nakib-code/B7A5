import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function HomeCTA(){

return (

<section className="container mx-auto px-4 py-16">


<div className="
rounded-2xl
bg-blue-600
p-10
text-center
text-white
">


<h2 className="text-3xl font-bold">
Need a Service Today?
</h2>


<p className="mt-3">
Book a professional technician easily.
</p>


<Link href="/services">

<Button
className="mt-6 bg-white text-blue-600 hover:bg-gray-100"
>
Find Services
</Button>

</Link>


</div>


</section>

);

}