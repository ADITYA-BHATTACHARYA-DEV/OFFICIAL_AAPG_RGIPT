"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const isActive = (path: string) => pathname === path

  return (
    <header className="bg-[#005388] shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center text-white text-xl font-bold">
            <Image
              src={process.env.NEXT_PUBLIC_LOGO_URL || "/aapg logo.jpg"}
              alt="Logo"
              width={50}
              height={50}
              className="mr-2 rounded-full"
            />
            AAPG RGIPT SC
          </Link>

          <button className="sm:hidden text-white" onClick={toggleMobileMenu}>
            ☰
          </button>

          <nav className={`${isMobileMenuOpen ? "block" : "hidden"} sm:block`}>
            <ul className="flex flex-col sm:flex-row sm:space-x-8">
              <li>
                <Link
                  href="/"
                  className={`block py-2 ${isActive("/") ? "text-blue-200" : "text-white hover:text-blue-200"}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block py-2 ${isActive("/about") ? "text-blue-200" : "text-white hover:text-blue-200"}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className={`block py-2 ${isActive("/team") ? "text-blue-200" : "text-white hover:text-blue-200"}`}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className={`block py-2 ${isActive("/events") ? "text-blue-200" : "text-white hover:text-blue-200"}`}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/achievements"
                  className={`block py-2 ${isActive("/achievements") ? "text-blue-200" : "text-white hover:text-blue-200"}`}
                >
                  Achievements
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header