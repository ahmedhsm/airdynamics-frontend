import { useEffect, useState } from 'react'
import { fetchHomepage } from '../lib/sanity'

export default function Homepage() {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getContent = async () => {
      try {
        const data = await fetchHomepage()
        setContent(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    getContent()
  }, [])

  if (loading) return <div className="p-4">Loading...</div>
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>
  if (!content) return <div className="p-4">No content found</div>

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{content.title}</h1>
      <p className="mt-4 text-gray-600">{content.description}</p>
    </div>
  )
}
