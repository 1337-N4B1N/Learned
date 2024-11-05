import React from 'react'
import { useEffect } from 'react'

const Navbar = ({color}) => {
   // Case1:Run on every render
  useEffect(() => {
    alert("Hello!This runs on every render")
   })
   // Case1:Run only on first render
   useEffect(() => {
    alert("Hello!This runs only on first render")
   },[])
   // yo [] ma empty i.e[] lekhnu ley chai useEffect trigger garxa whenever the page mounts in browser i.e whenever webpage reloads//
   // ````````````````````````````````````````````````````````````
   // ````````````````````````````````````````````````````````````
   // case3:Runs only when certain value changes
   useEffect(() => {
    alert("It is running because color was changed");
    
   },[color])
//    Example of cleanup function
   useEffect(() => {
    alert(" Hey welcome to my page.This is the first render of  app.jsx ");
    return()=>{
      alert("component was unmounted")
    //   yo cleanup hamro navbar.jsx ma xa,,If we unmount navbar from app.jsx than this popup will occur
    }
   },[])
  return (
    <div>
      I am Navbar of {color}  color...ohilholeo
    </div>
  )
}

export default Navbar
