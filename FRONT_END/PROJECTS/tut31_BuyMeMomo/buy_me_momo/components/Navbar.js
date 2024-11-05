"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchuser } from "@/actions/useractions";

const Navbar = () => {
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if (session) getData();
  }, [session]);

  const getData = async () => {
    if (session?.user) {
      const userId = session.user.name;
      const user = await fetchuser(userId);
      setCurrentUser(user);
    }
  };

  return (
    <nav className="bg-slate-950 text-white flex flex-col md:flex-row justify-between items-center px-4 py-2 md:py-0 h-auto md:h-[8vh] space-y-2 md:space-y-0 fixed top-0 w-full z-50">
      <Link href="/" className="font-bold text-lg flex items-center gap-2">
        <span>Get Me Momo</span>
        <img src="/momo.png" width={32} className="md:w-9 lg:w-10" />
      </Link>

      <div className="relative flex items-center space-x-2">
        {session && (
          <>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
            className="text-white text-center flex items-center font-medium rounded-lg text-sm px-3 py-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Welcome {currentUser.username}
            <svg className="w-3 h-3 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"   
d="M1 1l4 4 4-4" />
            </svg>   

          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute z-10 mt-4 left-0 bg-slate-950 text-white rounded-lg shadow-md w-44 top-6">
              {/* Added a margin-top of 4 for spacing */}
              <ul className="py-2 text-sm">
                <li>
                  <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-700">Dashboard</Link>
                </li>
                <li>
                  <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-700">Your Page</Link>
                </li>
                <li>
                  <button onClick={() => signOut()} className="w-full text-left block px-4 py-2 hover:bg-gray-700">Sign out</button>
                </li>
              </ul>
            </div>
          )}
        </>
        )}
        {!session ? (
          <Link href="/login">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-2">Login</button>
          </Link>
        ) : (
          <button onClick={() => signOut()} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-2">Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
