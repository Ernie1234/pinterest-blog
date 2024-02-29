"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Jumbotron } from ".";
import { SanityDocument } from "next-sanity";
import { IPost } from "@/constants/types";

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
      <div className="flex justify-center items-center">
        <div className="flex-1">{posts.title}</div>
        <div className="flex-1"></div>
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
