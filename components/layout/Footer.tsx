import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

const Footer = () => {
  return (
    <footer>
      <div className="py-9 px-4 self-start">
        <Link href={"/"}>
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