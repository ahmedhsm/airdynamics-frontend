import { useEffect, useState } from 'react'
import { fetchProducts } from '../lib/sanity'

export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts()
        setProducts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [])

  if (loading) return <div className="p-4">Loading products...</div>
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface-container-low overflow-hidden" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-headline font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block">Engineered Catalog</span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">Precision Components</h2>
          </div>
          <p className="text-secondary max-w-sm text-sm sm:text-base">Explore our core range of high-performance filtration units designed for extreme operational environments.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-surface-container-lowest rounded-xl p-6 hover:scale-[1.02] transition-all group shadow-sm border border-surface-container-high">
              <div className="h-32 sm:h-40 lg:h-48 flex items-center justify-center mb-6 sm:mb-8 relative overflow-hidden rounded-lg bg-surface">
                {product.image && (
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={product.image.asset?.url || product.image.url}
                    alt={product.alt || product.title}
                  />
                )}
              </div>
              <h4 className="font-headline font-bold text-lg sm:text-xl mb-2">{product.title}</h4>
              <p className="text-secondary text-xs sm:text-sm mb-4 sm:mb-6">{product.description}</p>
              <div className="w-full h-0.5 bg-gradient-to-r from-primary-container to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left mb-4 sm:mb-6"></div>
              {product.techSpecsUrl && (
                <a
                  href={product.techSpecsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-container font-headline font-bold text-sm flex items-center gap-2 group/btn"
                >
                  Technical Data <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform text-base">arrow_forward</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
