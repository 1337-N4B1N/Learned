"use server"
import fs from"fs/promises"
export const submitAction=async(e)=>{
    
    console.log("name is"+e.get("name")+"and adress is "+e.get("address"))
   let a=await fs.writeFile("Nabin.txt","Hey I am doing fine..")
   console.log(a)
  }
