import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex gap-4 items-center">
      <Image
        alt="logo"
        src={"/assets/pinterest-logo.png"}
        width="0"
        height="0"
        sizes="2.5vw"
        className="w-full h-auto"
      />
      <h2 className="text-md font-semibold">Newsroom</h2>
    </Link>
  );
}
