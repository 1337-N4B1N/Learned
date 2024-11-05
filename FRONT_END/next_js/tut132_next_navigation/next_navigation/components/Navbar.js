"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
const Navbar = () => {
    const pathname=usePathname()
    // hami currently kun page ma xam bhnera display garna help garxa yesley..
  return (
    <div>
        <div>Navbar</div>
        <div>You are inside {pathname}</div>

    </div>

  )
}

export default Navbar