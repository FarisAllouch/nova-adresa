import { type SchemaTypeDefinition } from 'sanity'
import stan from "./stan";
import project from './project';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [stan, project],
}
