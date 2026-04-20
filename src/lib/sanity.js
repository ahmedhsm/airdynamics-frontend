import { createClient } from '@sanity/client'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

// Helper function to fetch all documents of a specific type
export const fetchContent = async (type) => {
  const query = `*[_type == "${type}"]`
  return await client.fetch(query)
}

// Helper function to fetch specific document by ID
export const fetchById = async (id) => {
  const query = `*[_id == "${id}"][0]`
  return await client.fetch(query)
}

// Helper function for homepage content
export const fetchHomepage = async () => {
  const query = `*[_type == "homepage"][0]`
  return await client.fetch(query)
}

// Helper function to fetch all components sorted by order
export const fetchComponents = async () => {
  const query = `*[_type == "components"] | order(order asc)`
  return await client.fetch(query)
}

// Helper function to fetch components by type
export const fetchComponentsByType = async (type) => {
  const query = `*[_type == "components" && componentType == "${type}"] | order(order asc)`
  return await client.fetch(query)
}

// Helper function to fetch all products with images
export const fetchProducts = async () => {
  const query = `*[_type == "product"] | order(order asc) {
    _id,
    title,
    description,
    image {
      asset -> {
        url
      }
    },
    alt,
    techSpecsUrl,
    order,
    subProducts[] {
      title,
      description,
      image {
        asset -> {
          url
        }
      }
    }
  }`
  return await client.fetch(query)
}

// Helper function to fetch all page sections sorted by order
export const fetchPageSections = async () => {
  const query = `*[_type == "pageSection" && enabled == true] | order(order asc) {
    _id,
    sectionType,
    enabled,
    navLabel,
    order,
    heroHeading,
    heroHighlight,
    heroDescription,
    heroImage {
      asset -> {
        url
      }
    },
    heroPrimaryButtonText,
    heroSecondaryButtonText,
    heroStatNumber,
    heroStatLabel,
    aboutHeading,
    aboutParagraph1,
    aboutParagraph2,
    aboutCard1Title,
    aboutCard1Description,
    aboutCard2Title,
    aboutCard2Description,
    missionHeading,
    missionDescription,
    missionImage {
      asset -> {
        url
      }
    },
    visionHeading,
    visionDescription,
    contactHeading,
    contactDescription,
    contactEmail,
    contactPhone,
    partnersHeading,
    partnersDescription,
    partnersList[] {
      name,
      logo {
        asset -> {
          url
        }
      }
    }
  }`
  return await client.fetch(query)
}
