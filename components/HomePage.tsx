"use client";

import { useEffect, useRef, useState } from "react";
import { IPost } from "@/constants/types";
import Image from "next/image";

import { LinkBtn } from ".";

const HomePage = ({ posts }: { posts: IPost }) => {
  const myRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setTimeout(() => {
        setInView(entry.isIntersecting);
      }, 1000);
    });
    if (myRef.current) observer.observe(myRef.current);
  }, []);

  console.log(posts);

  return (
    <div className="bg-white">
      {/* Jumbotron */}
      <div className="flex justify-center items-center h-min">
        {/* text side */}
        <div className="flex-1 flex flex-col justify-center items-center gap-4 md:gap-8 lg:gap-12">
          <div className="flex justify-center items-center flex-col">
            <p className="font-medium md:text-lg lg:text-xl ">Featured news</p>
            <h1 className="pt-4 w-4/5 lg:w-3/5 text-center text-xl md:text-3xl lg:text-5xl">
              {posts.title}
            </h1>
          </div>

          <LinkBtn link={`/news/${posts.slug.current}`} title="read more" />
        </div>
        {/*  image side */}
        <div className="flex-1 w-full h-full">
          <Image
            src={posts.mainImage.asset.url}
            alt={posts.slug.current}
            width={0}
            height={0}
            sizes="100vw"
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      {/* Latest News */}
      <div className="py-10 md:py-16 lg:py-28 flex justify-center items-center flex-col ">
        <h2 className="pt-4 w-4/5 lg:w-3/5 text-center font-medium text-2xl md:text-4xl lg:text-6xl">
          Latest news
        </h2>
        <div className="grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16"></div>
        <LinkBtn link="/news" title="see all" />
      </div>

      <div ref={myRef} className={`${inView ? "bg-green-200" : ""} `}>
        world
      </div>
      <div className=" ">check</div>
      <div className=" ">gut</div>
    </div>
  );
};

export default HomePage;
