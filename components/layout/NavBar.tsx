import Logo from "../layout/Logo"
import Link from "next/link";

export default function NavBar() {
  return (
    // <nav className="mx-auto max-w-7xl px-5 mb-9">
      <nav className="py-9 px-4 self-start">
      <Link href={"/"}>
        <div className="flex items-start justify-start">
          <Logo />
        </div>
      </Link>
    </nav>
  );
}
