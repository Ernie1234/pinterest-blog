import Link from "next/link";

function page() {
  return (
    <div className="min-h-screen flex flex-col mx-auto  w-full max-w-screen-lg bg-pink-400">
      <div className="lg:py-40 md:py-28 py-16 bg-slate-600">
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
    </div>
  );
}

export default page;
