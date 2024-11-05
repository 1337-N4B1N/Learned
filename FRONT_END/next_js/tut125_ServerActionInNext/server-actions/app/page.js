"use client"
import Image from "next/image";
// import fs from "fs/promises"
import { submitAction } from "@/actions/form";
import { useRef } from "react";
export default function Home() {
  let ref=useRef()
  // const submitAction=async(e)=>{
  //   "use server"
  //   console.log("name is"+e.get("name")+"and adress is "+e.get("address"))
  //  let a=await fs.writeFile("Nabin.txt","Hey I am doing fine..")
  //  console.log(a)
  // }
  return (
    <div className="w-2/3 mx-auto my-16">
      <form ref={ref} action={(e)=>{submitAction(e);ref.current.reset()}}>
     
      <div>
        <label htmlFor="name">Name:</label>
        <input className="text-black mx-4" type="text" name="name" id="name"/>
      </div>
      <div>
        <label htmlFor="add">Add</label>
        <input className="text-black mx-4" type="text" name="address" id="add"/>
      </div>
      <div>
        <button className="border border-white">
          Submit
        </button>
      </div>
      </form>
    </div>
  );
}
