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
export const LATEST_QUERY = groq`*[_type == "post" ]{
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

export const NEWS_DETAIL = (slug: string) => {
  const query = groq`*[_type == "post" && slug.current == '${slug}'][0]{
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

  return query;
};

export const RELATED_CATEGORIES_QUERIES = (cat: string) => {
  const query = groq`*[_type == "post" && categories == '${cat}']{
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

  return query;
};
