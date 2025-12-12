import { type SchemaTypeDefinition } from 'sanity'
import stan from "./stan";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [stan],
}
