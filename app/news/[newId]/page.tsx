import { IPost } from "@/constants/types";
import { NEWS_DETAIL } from "@/sanity/lib/queries";
import { loadQuery } from "@/sanity/lib/store";

interface Props {
  params: {
    newId: string;
  };
}

async function page({ params }: Props) {
  const slug = params.newId;
  const allNews = await loadQuery<IPost>(NEWS_DETAIL(slug));

  const item = allNews.data;

  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto min-h-screen w-full max-w-screen-lg bg-red-400">
        <h1 className="lg:pt-32 lg:text-6xl md:text-4xl text-3xl font-semibold text-slate-900">
          {item.title}
        </h1>
        <p className="group-hover:underline text-2xl text-center pt-6 px-1">
          21 February 2024
        </p>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}

export default page;
