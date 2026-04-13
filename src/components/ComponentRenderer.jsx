import { useEffect, useState } from 'react'
import { fetchComponents } from '../lib/sanity'
import Hero from './components/Hero'
import Card from './components/Card'
import Button from './components/Button'
import TextBlock from './components/TextBlock'
import ImageBlock from './components/ImageBlock'

// Map component types to React components
const componentMap = {
  hero: Hero,
  card: Card,
  button: Button,
  textBlock: TextBlock,
  imageBlock: ImageBlock,
}

export default function ComponentRenderer() {
  const [components, setComponents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getComponents = async () => {
      try {
        const data = await fetchComponents()
        setComponents(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    getComponents()
  }, [])

  if (loading) return <div className="p-4">Loading components...</div>
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>

  return (
    <div className="w-full">
      {components.map((component) => {
        const Component = componentMap[component.componentType]
        if (!Component) return <div key={component._id}>Unknown component type: {component.componentType}</div>
        return <Component key={component._id} data={component} />
      })}
    </div>
  )
}
