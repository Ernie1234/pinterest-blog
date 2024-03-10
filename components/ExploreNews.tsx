"use client";

import { useState } from "react";

import { Button, Card, Drop } from ".";
import { IPost } from "@/constants/types";

type Props = {
  news: IPost[];
};
function ExploreNews({ news }: Props) {
  const [btnText, setBtnText] = useState<
    | "all"
    | "product"
    | "company"
    | "ads"
    | "creators"
    | "trends"
    | "partnership"
    | "policy"
  >("all");

  return (
    <div className="flex flex-col justify-center items-center mx-auto w-full max-w-screen-xl">
      <h5 className="font-semibold pt-10 pb-4 text-lg">explore by category</h5>
      <div className="flex gap-3 pb-16">
        <Button
          title="all"
          handleClick={() => {
            setBtnText("all");
          }}
        />
        <Button
          title="Product"
          handleClick={() => {
            setBtnText("product");
          }}
        />
        <Button
          title="Company"
          handleClick={() => {
            setBtnText("company");
          }}
        />
      </div>
      {/*  Show news based on the selected button */}
      <div className="py-5 mx-auto max-w-screen-xl md:py-10 lg:py-16 grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-8">
        {/* fetch data here */}
        {news?.map((post) => (
          <Card key={post._id} post={post} isShownDate={false} />
        ))}
      </div>
      <Drop />
    </div>
  );
}

export default ExploreNews;
