const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || 'v2025-02-19';

export const sanityReady = Boolean(projectId);

export async function fetchSanityQuery(query) {
  if (!projectId) return null;

  const url = new URL(
    `https://${projectId}.api.sanity.io/${apiVersion}/data/query/${dataset}`
  );
  url.searchParams.set('query', query);

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Sanity query failed with ${response.status}`);
  }

  const payload = await response.json();
  return payload.result ?? null;
}

