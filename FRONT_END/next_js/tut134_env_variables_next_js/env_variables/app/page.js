"use client"
import Image from "next/image";

export default function Home() {
  // console.log("The ID is",process.env.ID)
  // console.log("The secret is",process.env.SECRET)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     Hello this is home for env variables..and my id is {process.env.NEXT_PUBLIC_ID} and secret is {process.env.SECRET}
    </div>
  );
}
