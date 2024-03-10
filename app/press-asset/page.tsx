import Link from "next/link";

import { AssetsCard, Drop } from "@/components";

function page() {
  return (
    <div className="min-h-screen flex flex-col mx-auto  w-full max-w-screen-xl">
      <div className="lg:py-40 md:py-28 py-16">
        <h1 className="text-center lg:text-6xl md:text-4xl text-3xl font-semibold text-slate-900">
          press asset
        </h1>
        <p className="font-medium text-center text-lg md:text-xl lg:text-2xl max-w-screen-md pt-6 md:pt-8 lg:pt-12 mx-auto">
          Download images, videos, product screens and more from our library.
          Review our{" "}
          <Link
            href="https://pinterest-clone-v2.netlify.app/"
            target="blank"
            className="underline"
          >
            brand guidelines
          </Link>
          to learn more.
        </p>
      </div>
      <div className="flex flex-col gap-8 md:gap-16 lg:gap-44">
        <AssetsCard
          imgSrc="/assets/Press_assets_product_ENGB.webp"
          title="Product"
          subTitle="Product screens and video footage of Pinterest in action"
          link="https://
          pinterest-clone-v2.netlify.app/"
        />
        <AssetsCard
          imgSrc="/assets/PressAssets_Brand.webp"
          title="Brand"
          subTitle="Logos and other brand assets. Refer to our brand guidelines for more information."
          link="https://
          pinterest-clone-v2.netlify.app/"
        />
        <AssetsCard
          imgSrc="/assets/PressAssets_Culture.webp"
          title="Culture"
          subTitle="Video and images of Pinterest’s employees and company culture"
          link="https://
          pinterest-clone-v2.netlify.app/"
        />
        <AssetsCard
          imgSrc="/assets/built_in_ratios.webp"
          title="B-roll"
          subTitle="Ready-to-use video of our product, users, offices and more"
          link="https://
          pinterest-clone-v2.netlify.app/"
        />
        <AssetsCard
          imgSrc="/assets/Newsroom_Press-asset.webp"
          title="Leadership"
          subTitle="Images of our executive team, including CEO Bill Ready"
          link="https://
          pinterest-clone-v2.netlify.app/"
        />
      </div>
      <Drop />
    </div>
  );
}

export default page;
