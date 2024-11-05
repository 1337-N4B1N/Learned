"use client"
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
export default function Home() {
  const pathname=usePathname()
  const searchparams=useSearchParams()

  return (
    <div>
     Hey this is our page and blog is {searchparams.get(`blog`)} and utm source is {searchparams.get(`utm_source`)}
    </div>
  );
}
