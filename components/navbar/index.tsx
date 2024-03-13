import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import ThemeToggle from "./ThemeToggle"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null) // Ref für die Navbar
  const [navbarHeight, setNavbarHeight] = useState("0px")

  useEffect(() => {
    // Setze die Höhe der Navbar, sobald das Component gemounted ist und immer wenn isOpen sich ändert
    if (navbarRef.current) {
      setNavbarHeight(`${navbarRef.current.clientHeight}px`)
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      ref={navbarRef}
      className="sticky top-0 z-50 bg-navbar p-4 shadow-md dark:bg-navbarDark"
    >
      <div className="container mx-auto flex items-center justify-between text-black">
        <div className=" dark:text-white">
          <Link href="/">
            <Image
              className="rounded-3xl"
              src="/Logo.png"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6 text-black	"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-black dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            )}
          </button>
        </div>

        {/* big screen */}
        <div className="hidden lg:flex lg:space-x-5">
          <Link
            href="/"
            className="py-2 hover:text-blue-400 dark:text-white dark:hover:text-teal-400"
          >
            Home
          </Link>
          <Link
            href="/formenbau"
            className="py-2 hover:text-blue-400 dark:text-white  dark:hover:text-teal-400"
          >
            Formenbau
          </Link>
          <Link
            href="/location"
            className="py-2 hover:text-blue-400 dark:text-white  dark:hover:text-teal-400"
          >
            Standorte/Anfahrt
          </Link>
          <Link
            href="/contact"
            className="py-2 hover:text-blue-400 dark:text-white dark:hover:text-teal-400"
          >
            Kontakt
          </Link>
          <Link
            href="/jobs"
            className="py-2 hover:text-blue-400 dark:text-white dark:hover:text-teal-400"
          >
            Jobs
          </Link>
          <div className="py-1">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed inset-x-0 rounded-sm  shadow-2xl right-0 transition-all duration-700 ease-in-out md:hidden ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"} z-20`}
          style={{
            top: "82px",
            maxHeight: isOpen ? "200vh" : "0",
            overflow: "hidden",
          }}
        >
          <div className="bg-white py-4 shadow-md dark:bg-darkHover">
            <Link
              href="/"
              className="block py-2 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-navbar"
            >
              Home
            </Link>
            <Link
              href="/formenbau"
              className="block py-2 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-navbar"
            >
              Formenbau
            </Link>
            <Link
              href="/location"
              className="block py-2 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-navbar"
            >
              Standorte/Anfahrt
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-navbar"
            >
              Kontakt
            </Link>
            <Link
              href="/jobs"
              className="block py-2 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-navbar"
            >
              Jobs
            </Link>
            {/* Additional links */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
