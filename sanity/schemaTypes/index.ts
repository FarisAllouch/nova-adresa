import { type SchemaTypeDefinition } from 'sanity'
import stan from "./stan";
import project from './project';
import galerija from './galerija';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [stan, project, galerija],
}
