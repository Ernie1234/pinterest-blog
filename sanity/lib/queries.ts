// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const HEADER_POSTS_QUERY = groq`*[_type == "mainCover"][0]{
  title,
    _id,
    slug,
    mainImage{
      asset->{
        _type,
        url
      }
    }
    
}`;
export const LATEST_QUERY = groq`*[_type == "post" && categories == 'news']{
  title,
    _id,
    mainImage{
      asset->{
        _type,
        url
      }
    },
   publishedAt,
  categories,
    body,
    slug{
    current
    }
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
