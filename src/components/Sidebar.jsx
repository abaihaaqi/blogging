import Image from "next/image";
import Link from "next/link";

import { sideLink } from './Sidebar.module.css'
import Icon from "~~/public/favicon-32x32.png"

export default function Sidebar({ setIsOpen }) {
  return (
    <>
      <div className="fixed inset-0 bg-secondary/10" onClick={() => setIsOpen(false)} />
      <div className="fixed inset-y-0 right-0 w-4/6 bg-overall flex flex-col">
        <div className="py-4 flex justify-center">
          <Image
            src={Icon}
            alt="Nizar Baihaqi Icon"
          />
        </div>
        <Link href="/">
          <a className={sideLink}>
            Homepage
          </a>
        </Link>
        <Link href="/posts">
          <a className={sideLink}>
            Articles
          </a>
        </Link>
        <div className="flex justify-end">
          <button className="px-3 py-2 hover:underline" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </div>
      </div>
    </>
  )
}