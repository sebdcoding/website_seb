"use client"

import Link from "next/link"
import { Menu, User } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm h-16 flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMenu}
            className="w-10 h-10 border border-white flex items-center justify-center text-white"
            aria-label="Menu"
          >
            <Menu size={20} />
          </button>
          <button className="w-10 h-10 border border-white flex items-center justify-center text-white">
            <User size={20} />
          </button>
        </div>

        <div className="text-white font-normal">
          <Link href="/">sebdackus.com</Link>
        </div>

        <div className="text-white font-medium tracking-wide uppercase">
          <Link href="/projects">Portfolio</Link>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed top-16 left-0 w-64 bg-neutral-800 text-white z-50 h-screen">
          <nav className="p-4 flex flex-col gap-4">
            <Link href="/" className="hover:text-neutral-300 uppercase tracking-wide" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/projects" className="hover:text-neutral-300 uppercase tracking-wide" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="/about" className="hover:text-neutral-300 uppercase tracking-wide" onClick={toggleMenu}>
              About
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}

