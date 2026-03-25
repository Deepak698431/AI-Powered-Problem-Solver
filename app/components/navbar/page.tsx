
"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession , signOut } from "next-auth/react";

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const { data: session , status } = useSession();
if(status==="loading") return null;
  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div className="relative flex justify-center items-center font-bold">
          <Link href="/" className="flex justify-center items-center">
          <img src="/golden-luxury-letter-d-logo-design-vector-47176278.jpg" className="h-17 w-28 object-cover rounded-xl shadow-md" alt="" />
          <h1>
            My_App
          </h1>
          
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/explore" className="hover:text-gray-300">Explore</Link>
          {session ? <button
          onClick={() => signOut()}
          className="bg-red-500 text-white px-4 py-2 rounded-2xl"
        >
          Logout
        </button>:
          <Link href="/signin" onClick={() => setIsOpen(false)}>
            <button className="bg-white text-black px-4 py-1 rounded-lg">
              Sign In
            </button>
          </Link>
            }
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/explore" onClick={() => setIsOpen(false)}>Explore</Link>
          {session ? <button
          onClick={() => signOut()}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>:
          <Link href="/signin" onClick={() => setIsOpen(false)}>
            <button className="bg-white text-black px-4 py-1 rounded-lg">
              Sign In
            </button>
          </Link>
            }
        </div>
      )}
    </nav>
  );
}