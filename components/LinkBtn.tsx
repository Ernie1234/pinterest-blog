"use client";

import Link from "next/link";

function LinkBtn({ link, title }: { link: string; title: string }) {
  return (
    <Link
      href={link}
      className="mt-3 p-5 text-center text-black capitalize font-bold border-2 border-black items-center rounded-full cursor-pointer hover:bg-black hover:text-white hover:scale-x-110 hover:scale-y-105 transition-all duration-300 ease-out"
    >
      {title}
    </Link>
  );
}

export default LinkBtn;
