"use client";

import Image from "next/image";
import { LinkBtn } from ".";

interface Props {
  imgSrc: string;
  title: string;
  subTitle: string;
  link: string;
  btnTitle?: string;
}

function AssetsCard({
  imgSrc,
  title,
  subTitle,
  link,
  btnTitle = "View gallery",
}: Props) {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row gap-5 md:gap-8 lg:gap-12">
      <div className="flex-1">
        <Image
          src={imgSrc}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          objectFit="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="flex-1 flex flex-col gap-5 px-3 md:px-0">
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          {title}
        </p>
        <p className="text-base md:text-lg font-medium">{subTitle}</p>
        <div className="pt-5">
          <LinkBtn link={link} title={btnTitle} />
        </div>
      </div>
    </div>
  );
}

export default AssetsCard;
