export interface IPost {
  _id: string;
  _type: string;
  title: string;
  slug: Slug;
  mainImage: Image;
  description: string;
  publishedAt: string;
}
interface Slug {
  current: string;
  _type: string;
}
interface Image {
  _id: string;
  _type: string;
  asset: {
    _id: string;
    _type: string;
    url: string;
  };
}
