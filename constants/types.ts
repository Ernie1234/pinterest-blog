export interface IPost {
  _id: string;
  _type: string;
  title: string;
  slug: Slug;
  mainImage: Image;
  description: string;
  publishedAt: string;
  body: [];
  categories: string;
}
interface Slug {
  current: string;
  _type: string;
}
interface Image {
  asset: {
    _type: string;
    url: string;
  };
}
