import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import Sidebar from "./Sidebar";

import Icon from "~~/public/favicon-32x32.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    isOpen && (document.body.style.overflow = 'hidden')
    !isOpen && (document.body.style.overflow = 'unset')
  }, [isOpen])

  return (
    <>
      <div className="sticky top-0 px-3 py-2 bg-overall/50 flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center gap-2 font-bold">
            <Image
              src={Icon}
              alt="Icon Nizar Baihaqi"
            />
            Ijay's Blog
          </a>
        </Link>
        <button className="hover:underline" onClick={() => setIsOpen(true)}>
          Menu
        </button>
      </div>
      {isOpen && <Sidebar setIsOpen={setIsOpen} />}
    </>
  )
}