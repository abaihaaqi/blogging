import Image from "next/image";
import Link from "next/link";

import Icon from "~~/public/favicon-32x32.png";

export default function Navbar({ home }) {
  return (
    <>
      <div className="sticky top-0 px-3 py-2 bg-slate-900/40 flex justify-between items-center">
        <div className="container max-w-5xl">
          <Link href="/">
            <a className="flex items-center gap-2 font-bold">
              <Image
                src={Icon}
                alt="Icon Nizar Baihaqi"
              />
              {home ? `Ijay's Blog` : `Home`}
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}