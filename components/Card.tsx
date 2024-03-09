"use client";

import { IPost } from "@/constants/types";
import Image from "next/image";
import Link from "next/link";

interface ICard {
  post: IPost;
  isShownDate?: boolean;
}
function Card({ post, isShownDate }: ICard) {
  return (
    <Link
      href={`/news/${post.slug.current}`}
      className="group flex flex-col items-center transition-all duration-300"
    >
      <Image
        src={post.mainImage.asset.url}
        width={500}
        height={300}
        alt={post.slug.current}
        quality={100}
      />
      {isShownDate && <p className="text-center pt-6">{post.publishedAt}</p>}
      <p className="group-hover:underline text-2xl text-center pt-6 px-1">
        {post.title}
      </p>
    </Link>
  );
}

export default Card;
