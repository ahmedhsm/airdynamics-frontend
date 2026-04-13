# Sanity Integration Setup

## Environment Variables
Your frontend now has the following configured in `.env.local`:
- `VITE_SANITY_PROJECT_ID`: 9g0iq0kf
- `VITE_SANITY_DATASET`: production
- `VITE_SANITY_API_VERSION`: 2024-01-01

## Using Sanity Content in Your Frontend

### 1. Import and use the Sanity helpers
```javascript
import { fetchHomepage, fetchContent, fetchById } from './lib/sanity'
```

### 2. Example: Fetch homepage content
```javascript
const homepage = await fetchHomepage()
```

### 3. Example: Fetch all documents of a type
```javascript
const allPosts = await fetchContent('post')
```

### 4. Example: Fetch by ID
```javascript
const specificDoc = await fetchById('document-id-here')
```

## Next Steps
1. **Define your schema in the CMS**: Edit `schemaTypes/homepage.js` in the airdynamics-dashboard project
2. **Create content**: Run the Sanity Studio (`npm run dev` in airdynamics-dashboard)
3. **Query content**: Use the provided helpers in your React components
4. **Use the example component**: The `Homepage.jsx` component shows how to fetch and display content

## Example Schema (for your CMS)
Add this to `schemaTypes/homepage.js`:
```javascript
export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ]
}
```
