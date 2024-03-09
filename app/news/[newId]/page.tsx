import { IPost } from "@/constants/types";
import { NEWS_DETAIL, RELATED_CATEGORIES_QUERIES } from "@/sanity/lib/queries";
import Image from "next/image";

import { loadQuery } from "@/sanity/lib/store";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/components/RictText";
import { Card } from "@/components";

interface Props {
  params: {
    newId: string;
  };
}

async function page({ params }: Props) {
  const slug = params.newId;
  const allNews = await loadQuery<IPost>(NEWS_DETAIL(slug));
  const item = allNews.data;
  console.log(item.categories);

  const relatedCats = await loadQuery<IPost[]>(
    RELATED_CATEGORIES_QUERIES(item.categories)
  );
  const cats = relatedCats.data;
  console.log(cats);

  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto min-h-screen w-full max-w-screen-lg">
        <h1 className="text-center lg:pt-32 lg:text-6xl md:text-4xl text-3xl font-semibold text-slate-900">
          {item.title}
        </h1>
        <p className="group-hover:underline text-2xl text-center py-6 md:py-12 lg:py-20 px-1">
          21 February 2024
        </p>
        <div className="">
          <Image
            src={item.mainImage.asset.url}
            alt="news-image"
            width={0}
            height={0}
            sizes="100vw"
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <PortableText value={item?.body} components={RichText} />
        </div>
        {/* related categories */}
        <div className="py-6 md:py-12 lg:py-20">
          {cats.map((category) => (
            <Card key={category._id} post={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
