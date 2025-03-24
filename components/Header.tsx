"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface HeaderProps {
  onLoginClick: () => void
  onSignUpClick: () => void
  onHomeClick: () => void
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, onSignUpClick, onHomeClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navigateTo = (page: string) => {
    alert(`Navigating to ${page} page`)
    // In a real application, you might use Next.js routing here
  }

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" onClick={onHomeClick} className="flex items-center text-gray-900 text-xl font-bold">
            <Image src="/api/placeholder/50/50" alt="Logo" width={50} height={50} className="mr-2 rounded-full" />
            AAPG RGIPT SC
          </Link>

          <button className="sm:hidden" onClick={toggleMobileMenu}>
            ☰
          </button>

          <nav className={`${isMobileMenuOpen ? "block" : "hidden"} sm:block`}>
            <ul className="flex flex-col sm:flex-row sm:space-x-8">
              <li>
                <a href="#" onClick={() => navigateTo("home")} className="block py-2 text-gray-700 hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => navigateTo("about")}
                  className="block py-2 text-gray-700 hover:text-blue-600"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => navigateTo("membership")}
                  className="block py-2 text-gray-700 hover:text-blue-600"
                >
                  Membership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => navigateTo("events")}
                  className="block py-2 text-gray-700 hover:text-blue-600"
                >
                  Events
                </a>
              </li>
            </ul>
          </nav>

          <div className={`${isMobileMenuOpen ? "block" : "hidden"} sm:block`}>
            <button
              onClick={onLoginClick}
              className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300"
            >
              Login
            </button>
            <button
              onClick={onSignUpClick}
              className="ml-4 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

