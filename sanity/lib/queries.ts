// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const HEADER_POSTS_QUERY = groq`*[_type == "post"][0]{
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

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
