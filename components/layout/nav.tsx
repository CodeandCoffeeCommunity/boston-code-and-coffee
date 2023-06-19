import Logo from "./Logo";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="mx-auto max-w-7xl px-5 mb-9">
      <Link href={"/"}>
        <Logo />
      </Link>
      <h2 className="text-4xl font-bold text-gray-900">Boston</h2>
    </nav>
  );
}
