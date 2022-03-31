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
      <div className="sticky top-0 px-3 py-2 flex justify-between items-center">
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
          <button className="bg-none rounded-full" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            kil
          </button>
          <button className="bg-none rounded-full" onClick={() => setIsOpen(true)}>
            huhu
          </button>
        </div>
      </div>
      {isOpen && <Sidebar setIsOpen={setIsOpen} />}
    </>
  )
}