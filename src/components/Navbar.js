import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars
} from "@fortawesome/free-solid-svg-icons"

import { useState, useEffect } from "react";
import { useTheme } from "next-themes"

import Image from "next/image";
import Link from "next/link";

import Sidebar from "./Sidebar";

import Icon from "~~/public/favicon-32x32.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const {theme, setTheme} = useTheme()

  useEffect(() => {
    isOpen && (document.body.style.overflow = 'hidden')
    !isOpen && (document.body.style.overflow = 'unset')
  }, [isOpen])

  return (
    <>
      <div className="sticky top-0 bg-pastel-blue dark:bg-night-purple px-3 py-2 flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center gap-2 font-bold">
            <Image
              src={Icon}
              alt="Icon Nizar Baihaqi"
            />
            Blog
          </a>
        </Link>
        <div className="flex gap-1">
          <button className="btn bg-none rounded-full" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <FontAwesomeIcon
              icon={theme === 'dark' ? faMoon : faSun}
              className="w-4"
            />
          </button>
          <button className="btn bg-none rounded-full" onClick={() => setIsOpen(true)}>
            <FontAwesomeIcon
              icon={faBars}
              className="w-4"
            />
          </button>
        </div>
      </div>
      {isOpen && <Sidebar setIsOpen={setIsOpen} />}
    </>
  )
}