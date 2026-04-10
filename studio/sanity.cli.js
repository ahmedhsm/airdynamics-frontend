import { defineCliConfig } from 'sanity/cli';

const env = globalThis.process?.env ?? {};
const projectId = env.SANITY_STUDIO_PROJECT_ID || 'replace-with-project-id';
const dataset = env.SANITY_STUDIO_DATASET || 'production';

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  server: {
    hostname: 'localhost',
    port: 3333,
  },
});
