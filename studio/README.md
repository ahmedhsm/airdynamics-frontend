# AIRDYNAMICS Studio

This folder contains the Sanity Studio dashboard for AIRDYNAMICS.

## What it does

- Lets editors update homepage content without touching React code
- Supports drag-and-drop ordering for navigation links, feature cards, products, partners, and footer links
- Keeps the homepage content in one Home Page document for easy editing

## Setup

1. Create a Sanity project and copy the project ID.
2. Set these environment variables in this folder:
   - `SANITY_STUDIO_PROJECT_ID`
   - `SANITY_STUDIO_DATASET`
3. Install the Studio dependencies:
   - `npm install`
4. Start the Studio:
   - `npm run dev`
5. Add your local frontend origin to Sanity CORS if you want the React app to fetch content:
   - `sanity cors add http://localhost:5173 --no-credentials`

## Notes

- The Home Page document is configured as a singleton in the Studio sidebar.
- The public React app is still separate and can be wired to Sanity next.
