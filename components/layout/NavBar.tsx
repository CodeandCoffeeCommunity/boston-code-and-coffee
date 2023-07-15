import Logo from "../layout/logo.svg"
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="py-9 px-4 self-start">
    <Link href={"/"}>
      <div className="flex items-start justify-start">
        <Image
          priority
          src={Logo}
          alt="Code and Coffee Boston Logo" 
        />
      </div>
    </Link>
  </nav>
)}