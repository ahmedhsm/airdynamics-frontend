import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas.js';
import { singletonActions, singletonDocumentTypes, structure } from './structure.js';

const env = globalThis.process?.env ?? {};
const projectId = env.SANITY_STUDIO_PROJECT_ID || 'replace-with-project-id';
const dataset = env.SANITY_STUDIO_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'AIRDYNAMICS Studio',
  projectId,
  dataset,
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonDocumentTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonDocumentTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
