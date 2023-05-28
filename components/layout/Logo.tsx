import Image from "next/image";
import ccLogo from "./logo.png";

export default function Logo() {
  return (
    <div className="mt-5">
      <Image src={ccLogo} alt="Code & Coffee logo" width={300} height={100} />
    </div>
  );
}
