"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
const page = () => {
    const params=useParams()
    const router=useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/dashboard')
        },2333); 
    }, [])


  return (
    <>
    <div>Hey its {params.slug} </div>

    <button  className=" m-4 p-4 rounded-lg bg-teal-800" onClick={()=>router.push('/dashboard')}>Dashboard</button>
   
    </>
  )
}

export default page 