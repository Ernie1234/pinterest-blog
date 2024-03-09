import { ExploreNews, LinkBtn } from "@/components";
import { IPost } from "@/constants/types";
import { LATEST_QUERY } from "@/sanity/lib/queries";
import { loadQuery } from "@/sanity/lib/store";
import Image from "next/image";

export default async function page() {
  const allNews = await loadQuery<IPost[]>(LATEST_QUERY);

  return (
    <div>
      <div className="flex justify-center items-center">
        {/* text side */}
        <div className="flex-1 flex flex-col justify-center items-center gap-4 md:gap-8 lg:gap-12">
          <div className="flex justify-center items-center flex-col">
            <p className="font-medium md:text-lg lg:text-xl ">Featured news</p>
            <h1 className="pt-4 w-4/5 lg:w-3/5 text-center text-xl md:text-3xl lg:text-5xl">
              Pinterest unveils slate of new product updates and ad solutions
            </h1>
          </div>

          <LinkBtn link={`/news`} title="read more" />
          {/* <LinkBtn link={`/news/${posts.slug.current}`} title="read more" /> */}
        </div>
        {/*  image side */}
        <div className="flex-1 w-full h-full">
          <Image
            src="/assets/Newsroom_featured_--Pinterest_presents.webp"
            alt="news-image"
            width={0}
            height={0}
            sizes="100vw"
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <ExploreNews news={allNews?.data} />
    </div>
  );
}
