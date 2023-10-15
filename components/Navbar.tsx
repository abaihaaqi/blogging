import Image from "next/image";
import Link from "next/link";
import Logo from "~/public/logo.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 inset-x-0 bg-black border-b border-gray-700 z-10">
      <div className="p-2 max-w-screen-md mx-auto flex justify-between items-center font-sans">
        <Link href="/">
          <Image src={Logo} alt="Website Logo" className="w-6 h-6" />
        </Link>
        <Link href="/">
          <p className="font-mono">Nizar Baihaqi</p>
        </Link>
      </div>
    </nav>
  );
}
