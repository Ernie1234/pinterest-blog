import Image from "next/image";
import Link from "next/link";

import { Card, LinkBtn } from "@/components";
import { loadQuery } from "@/sanity/lib/store";
import { IPost } from "@/constants/types";
import { LATEST_QUERY } from "@/sanity/lib/queries";

async function page() {
  const allPosts = await loadQuery<IPost[]>(LATEST_QUERY);
  const data = allPosts.data;

  return (
    <div className="min-h-screen">
      {/* Jumbotron */}
      <div className="flex flex-col mx-auto  w-full max-w-screen-lg">
        <h1 className="text-center lg:py-40 md:py-28 py-16 lg:text-6xl md:text-4xl text-3xl font-semibold text-slate-900">
          A better feed that actually feeds the soul
        </h1>
      </div>
      <div>
        <Image
          src="/assets/Company_hero_2x.webp"
          alt="news-image"
          width={0}
          height={0}
          sizes="100vw"
          objectFit="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* About Pinterest */}
      <div className="lg:py-40 md:py-28 py-16 max-w-screen-xl mx-auto">
        <p className="text-base font-semibold">About Pinterest</p>
        <p className="text-3xl max-w-prose pt-6 leading-9 font-medium">
          Pinterest is the visual inspiration platform where people come to
          search, save and shop the best ideas in the world for all of life’s
          moments. Whether it’s planning an outfit, trying a new beauty ritual,
          renovating a home or discovering a new recipe, Pinterest is the best
          place to confidently go from inspiration to action. Headquartered in
          San Francisco, Pinterest launched in 2010 and has 498 million monthly
          active users worldwide.1 Available on iOS and Android, and at
          <Link
            href="https://pinterest-clone-v2.netlify.app/"
            target="blank"
            className="underline"
          >
            {" "}
            www.pinterest-clone-v2.netlify.app
          </Link>
          .
        </p>
      </div>

      {/* fast facts */}
      <div className="flex justify-center items-center flex-col ">
        <h2 className=" text-center font-medium text-xl md:text-2xl lg:text-5xl">
          Fast facts
        </h2>
        <div className="py-5 mx-auto max-w-screen-xl md:py-10 lg:py-16 grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8">
          <div>
            <p className="text-2xl font-semibold">498 million</p>
            <p className="text-base font-medium">monthly active users1</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">1.5 billion</p>
            <p className="text-base font-medium">Pins saved every week2</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">61%</p>
            <p className="text-base font-medium">
              of weekly Pinterest users say that Pinterest is where they go to
              start a new project3
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold">8 out of 10</p>
            <p className="text-base font-medium">
              people view Pinterest as a positive place online4
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold">61%</p>
            <p className="text-base font-medium">
              of weekly Pinterest users have made a purchase from a Pin3
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold">46%</p>
            <p className="text-base font-medium">
              of weekly Pinterest users have discovered a new brand or product
              on Pinterest3
            </p>
          </div>
        </div>
      </div>

      {/* meet the team */}
      <div className="flex flex-col md:flex-row  items-center">
        <div className="flex-1">
          <Image
            src="/assets/newsroom_leadership_transparent.webp"
            alt="news-image"
            width={0}
            height={0}
            sizes="100vw"
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="flex-1">
          <h5 className="text-xl md:text-3xl lg:text-5xl">
            Meet <br /> Pinterest{`'`}s leadership
          </h5>
          <p className="font-medium md:text-lg lg:text-xl max-w-screen-sm py-6 ">
            Get to know our executive team. Read bios and download headshots for
            media use.
          </p>
          <div className="pt-5">
            <LinkBtn
              link="pinterest-clone-v2.netlify.app"
              title="meet the team"
            />
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="py-10 md:py-16 lg:py-28 flex justify-center items-center flex-col ">
        <h2 className="pt-4 w-4/5 lg:w-3/5 text-center font-medium text-2xl md:text-4xl lg:text-6xl">
          Latest news
        </h2>
        <div className="py-5 mx-auto max-w-screen-xl md:py-10 lg:py-16 grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8">
          {/* fetch data here */}
          {data?.slice(0, 3)?.map((post) => (
            <Card key={post._id} post={post} isShownDate={false} />
          ))}
        </div>

        <LinkBtn link="/news" title="see all" />
      </div>
    </div>
  );
}

export default page;
