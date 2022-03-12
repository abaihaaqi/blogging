import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faNewspaper,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import Image from "next/image";
import Link from "next/link";

import Icon from "~~/public/favicon-32x32.png"

export default function Sidebar({ setIsOpen }) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setIsOpen(false)} />
      <div className="fixed inset-y-0 right-0 w-4/6 bg-blue-200">
        <div className="py-4 flex justify-center">
          <Image
            src={Icon}
            alt="Nizar Baihaqi Icon"
          />
        </div>
        <Link href="/">
          <a className="side-link">
            <FontAwesomeIcon
              icon={faHome}
              className="w-4"
              />
            Homepage
          </a>
        </Link>
        <Link href="/posts">
          <a className="side-link">
            <FontAwesomeIcon
              icon={faNewspaper}
              className="w-4"
            />
            Articles
          </a>
        </Link>
        <Link href="/user">
          <a className="side-link">
            <FontAwesomeIcon
              icon={faUser}
              className="w-4"
            />
            Profile (dead link)
          </a>
        </Link>
        <div className="flex justify-end items-center">
          <button className="btn rounded-md mr-2" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </div>
      </div>
    </>
  )
}