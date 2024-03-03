"use client";

import { useEffect, useRef, useState } from "react";
import { IPost } from "@/constants/types";
import Image from "next/image";
import { IoMailOpenOutline, IoNotifications } from "react-icons/io5";

import { AppImage, Card, CardIcon, LinkBtn } from ".";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import { FaSuitcase } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { RiPieChart2Fill } from "react-icons/ri";

interface IProps {
  posts: IPost;
  data: IPost[];
}

const HomePage = ({ posts, data }: IProps) => {
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
        <div className="py-5 mx-auto max-w-screen-xl md:py-10 lg:py-16 grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-8">
          {/* fetch data here */}
          {data?.slice(0, 6)?.map((post) => (
            <Card key={post._id} post={post} isShownDate={false} />
          ))}
        </div>

        <LinkBtn link="/news" title="see all" />
      </div>

      {/* press centre */}
      <div className="py-5 md:py-16 lg:py-28 flex justify-center items-center flex-col mx-auto">
        <h2 className="pb-12 w-4/5 lg:w-3/5 text-center font-medium text-2xl md:text-4xl lg:text-6xl">
          press centre
        </h2>
        <div className="py-5 mx-auto max-w-screen-xl md:py-10 lg:py-16 grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-24">
          <CardIcon
            icon1={IoMailOpenOutline}
            text="Contact Us"
            icon2={IoIosArrowRoundForward}
            url="/contact"
          />
          <CardIcon
            icon1={FiDownload}
            text=" Press Asset"
            icon2={IoIosArrowRoundForward}
            url="/press-asset"
          />
          <CardIcon
            icon1={IoNotifications}
            text="Subcribe via RSS"
            icon2={MdOutlineArrowOutward}
            url="/contact"
          />
        </div>
      </div>

      <div
        ref={myRef}
        className={`${
          inView ? "bg-green-100" : ""
        } py-8 md:py-16 lg:py-28 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1`}
      >
        <div className="col-start-1 col-end-2 grid grid-cols-2 grid-rows-8 gap-x-4 gap-y-2">
          <div className="row-start-2 row-end-5 col-start-1 col-end-2">
            <AppImage src="/assets/Pin-shape-1.webp" alt="shape-1" />
          </div>
          <div className="row-start-1 row-end-4 col-start-2 col-end-3">
            <AppImage src="/assets/Pin-shape-2.webp" alt="shape-1" />
          </div>
          <div className="row-start-5 row-end-9 col-start-1 col-end-2">
            <AppImage src="/assets/Pin-shape-3.webp" alt="shape-1" />
          </div>
          <div className="row-start-4 row-end-8 col-start-2 col-end-3">
            <AppImage src="/assets/Pin-shape-4.webp" alt="shape-1" />
          </div>
        </div>
        <div className="col-start-2 lg:col-end-4 md:col-end-3 col-end-1 lg:pl-24 flex flex-col justify-center">
          <h2 className="pt-4 w-4/5 lg:w-3/5  font-medium text-3xl md:text-5xl lg:text-7xl">
            A more inspired internet
          </h2>
          <p className="text-2xl py-5 w-11/12">
            People come to Pinterest to find ideas. We help to turn those ideas
            into a reality.
          </p>
        </div>
      </div>

      {/* press centre */}
      <div className="py-10 md:py-16 lg:py-28 flex justify-center items-center flex-col mx-auto">
        <h2 className="pt-4 w-4/5 lg:w-3/5 text-center font-medium text-2xl md:text-4xl lg:text-6xl">
          Looking for something else?
        </h2>
        <div className="py-5 mx-auto max-w-screen-xl md:py-10 lg:py-16 grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-24">
          <CardIcon
            icon1={FaSuitcase}
            text="For Business"
            icon2={MdOutlineArrowOutward}
            url="/about"
          />
          <CardIcon
            icon1={BsFillGrid1X2Fill}
            text="For Creators"
            icon2={MdOutlineArrowOutward}
            url="/create"
          />
          <CardIcon
            icon1={RiPieChart2Fill}
            text="For Investors"
            icon2={MdOutlineArrowOutward}
            url="/contact"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
