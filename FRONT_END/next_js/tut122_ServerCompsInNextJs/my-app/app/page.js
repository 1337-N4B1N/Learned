// "use client"
import React from 'react'
import fs from "fs/promises"
import Navbar from '@/components/Navbar'
// import { useState,useEffect } from 'react'
const page = () => {
  // const [count, setCount] = useState(0)
  console.log("I am harry")
  let a=fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})
  return (
    <div>
      <Navbar/>
      I am a component..
      {/* The count is {count}
      <br />
      <button onClick={()=>setCount(count+1)}>Click Me!</button> */}
    </div>
  )
}

export default page
