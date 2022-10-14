import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Icon from "~/public/favicon-32x32.png";
import SearchComp from "./search-comp";

export default function Navbar({ home }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 bg-black z-50">
        <div className="container max-w-5xl h-[50px] flex justify-between items-center px-3">
          <Link href="/">
            <a
              title="Home"
              className="flex items-center w-max gap-2 font-serif font-bold text-white"
            >
              <Image
                src={Icon}
                alt="Icon Nizar Baihaqi"
                width={24}
                height={24}
              />
              {home ? `Ijay's Blog` : `Home`}
            </a>
          </Link>
          {/* <div className="flex gap-2">
            <button
              onClick={() => setIsOpen(true)}
              data-is-active={isOpen}
              className={`border border-white rounded px-3 hover:bg-white hover:text-black [&[data-is-active="true"]]:bg-white [&[data-is-active="true"]]:text-black transition-all`}
            >
              Search
            </button>
            Create login and category functionality
          <Link href="/category">
            <a className="rounded px-3 text-white hover:bg-zinc-800 hover:no-underline transition-all">Category</a>
          </Link>
          <button className="border border-white rounded px-3 hover:bg-white hover:text-black transition-all">
            Login
          </button>
          </div> */}
        </div>
      </nav>
      {isOpen && <SearchComp setIsOpen={setIsOpen} />}
    </>
  );
}
