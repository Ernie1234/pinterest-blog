import { type SchemaTypeDefinition } from "sanity";
import { author, blockContent, category, post } from "./schemas";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent],
};
