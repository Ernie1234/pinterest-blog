"use client";

import { loadQuery } from "@/sanity/lib/store";
import { HEADER_POSTS_QUERY } from "@/sanity/lib/queries";
import { useEffect } from "react";
import { client } from "@/sanity/lib/client";

const Jumbotron = () => {
  const fetchFunction = async () => {
    const data = await client.fetch(HEADER_POSTS_QUERY);
    console.log(data);
  };

  useEffect(() => {
    fetchFunction();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="flex-1"></div>
      <div className="flex-1"></div>
    </div>
  );
};

export default Jumbotron;
