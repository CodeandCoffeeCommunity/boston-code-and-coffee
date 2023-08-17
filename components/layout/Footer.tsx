"use client"

import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { usePathname } from "next/navigation"

const Footer = () => {
  const pathname = usePathname()
  
  return (
    <footer className="self-start">
      <div className="py-9 px-4 self-start">
        <Link href={pathname.includes("/about/") ? "/about" : "/"}>
          <button className="rounded-full bg-[#D9D9D9]">
            <HiArrowLeft
              size={50}
            />
          </button>
        </Link>
      </div>
    </footer>
  )
};

export default Footer;