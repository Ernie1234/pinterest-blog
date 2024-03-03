import { type SchemaTypeDefinition } from "sanity";
import { blockContent, mainCover, post } from "./schemas";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, mainCover],
};
