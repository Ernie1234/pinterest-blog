import { HomePage } from "@/components";
import { IPost } from "@/constants/types";
import { HEADER_POSTS_QUERY, LATEST_QUERY } from "@/sanity/lib/queries";

import { loadQuery } from "@/sanity/lib/store";

export default async function Home() {
  const initial = await loadQuery<IPost>(HEADER_POSTS_QUERY);
  const allPosts = await loadQuery<IPost[]>(LATEST_QUERY);

  return (
    <main>
      <HomePage posts={initial.data} data={allPosts.data} />
    </main>
  );
}
