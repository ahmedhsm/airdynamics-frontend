import { useEffect, useState } from 'react'
import { fetchProducts } from '../lib/sanity'

export default function AdminImageManager() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts()
        setProducts(data)
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [])

  if (loading) return <div className="p-4">Loading products...</div>

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">📸 Product Image Manager</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <p>
            <strong>To delete a product or its image:</strong>
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Go to <code className="bg-gray-200 px-2 py-1 rounded">localhost:3333</code></li>
            <li>Click <strong>"Product"</strong> in the sidebar</li>
            <li>Find the product you want to delete or modify</li>
            <li>
              To <strong>remove just the image</strong>: Click the image, then click the trash icon
            </li>
            <li>
              To <strong>delete entire product</strong>: Click the three dots menu (⋯) → Delete
            </li>
          </ol>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            {product.image && (
              <div className="h-40 overflow-hidden bg-gray-100">
                <img
                  src={product.image.url}
                  alt={product.alt || product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{product.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{product.description.substring(0, 80)}...</p>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>Order: {product.order}</span>
                <span>ID: {product._id.substring(0, 8)}</span>
              </div>
              <p className="text-xs mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded">
                💡 To delete: Open in CMS and click ⋯ menu
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
