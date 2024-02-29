import { HomePage } from "@/components";
import { IPost } from "@/constants/types";
import { HEADER_POSTS_QUERY } from "@/sanity/lib/queries";
import { loadQuery } from "@/sanity/lib/store";
import { SanityDocument } from "next-sanity";
import Image from "next/image";

export default async function Home() {
  const initial = await loadQuery<IPost>(HEADER_POSTS_QUERY);


  return (
    <main>
      <HomePage posts={initial.data} />
    </main>
  );
}
