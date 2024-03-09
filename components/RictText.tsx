import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/sanity/lib/createClient";

export const RichText = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="flex items-center justify-center py-6 md:py-12">
          <Image
            src={urlFor(value).url()}
            alt="Post image"
            width={0}
            height={0}
            sizes="100vw"
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5 text-lg">{children}</ul>
    ),
  },
  number: ({ children }: any) => (
    <ol className="mt-lg list-decimal">{children}</ol>
  ),
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-4xl py-10 font-bold">{children}</h4>
    ),
    p: ({ children }: any) => (
      <p className="text-6xl py-10 font-bold">{children}</p>
    ),
    normal: ({ children }: any) => (
      <p className="text-xl max-w-prose py-10 ">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-blue-600 border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      return (
        <Link
          href={value?.href ? value.href : "www.google.com"}
          target="_blank"
          className="underline"
        >
          {children}
        </Link>
      );
    },
  },
};
