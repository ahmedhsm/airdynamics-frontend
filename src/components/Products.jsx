import { useEffect, useState } from 'react'
import { fetchProducts } from '../lib/sanity'

function SubProductModal({ isOpen, onClose, product }) {
  if (!isOpen || !product) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white dark:bg-neutral-900 w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="p-6 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between bg-white dark:bg-neutral-900 sticky top-0 z-10">
          <div>
            <h3 className="font-headline text-2xl font-bold text-on-surface">{product.title}</h3>
            <p className="text-secondary text-sm">Product Range & Specifications</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors group"
          >
            <span className="material-symbols-outlined text-neutral-500 group-hover:text-primary">close</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {product.subProducts && product.subProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.subProducts.map((sub, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-6 p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors border border-transparent hover:border-neutral-100 dark:hover:border-neutral-700">
                  <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden">
                    {sub.image && (
                      <img 
                        src={sub.image.asset?.url || sub.image.url} 
                        alt={sub.title} 
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-headline font-bold text-lg mb-2 text-primary">{sub.title}</h5>
                    <p className="text-secondary text-sm leading-relaxed">{sub.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <span className="material-symbols-outlined text-4xl text-neutral-300 mb-4">inventory_2</span>
              <p className="text-secondary">No sub-products listed for this category yet.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-neutral-50 dark:bg-neutral-800/50 border-t border-neutral-100 dark:border-neutral-800 text-center">
          <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">Air Dynamics Engineered Precision</p>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'unset'
  }

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

  if (loading) return (
    <div className="py-24 text-center">
      <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-secondary font-headline">Syncing Product Catalog...</p>
    </div>
  )
  
  if (error) return <div className="p-4 text-red-600 container mx-auto">Error: {error}</div>

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface-container-low overflow-hidden" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-headline font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block animate-in slide-in-from-left duration-700">Engineered Catalog</span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">Precision Components</h2>
          </div>
          <p className="text-secondary max-w-sm text-sm sm:text-base border-l-2 border-primary/20 pl-6 py-2">Explore our core range of high-performance filtration units designed for extreme operational environments.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-surface-container-lowest rounded-xl p-6 hover:shadow-xl transition-all group border border-surface-container-high flex flex-col">
              <div className="h-32 sm:h-40 lg:h-48 flex items-center justify-center mb-6 sm:mb-8 relative overflow-hidden rounded-lg bg-surface">
                {product.image && (
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={product.image.asset?.url || product.image.url}
                    alt={product.alt || product.title}
                  />
                )}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <h4 className="font-headline font-bold text-lg sm:text-xl mb-2 group-hover:text-primary transition-colors">{product.title}</h4>
              <p className="text-secondary text-xs sm:text-sm mb-6 flex-1 line-clamp-3">{product.description}</p>
              
              <div className="flex flex-col gap-3 mt-auto">
                <button
                  onClick={() => openModal(product)}
                  className="w-full py-2.5 px-4 bg-primary text-white rounded-lg font-headline font-bold text-xs flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/10 active:scale-95"
                >
                  <span className="material-symbols-outlined text-sm">visibility</span>
                  View
                </button>
                
                {product.techSpecsUrl && (
                  <a
                    href={product.techSpecsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-container font-headline font-bold text-xs flex items-center justify-center gap-2 py-2 hover:text-primary transition-colors"
                  >
                    Technical Data <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <SubProductModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        product={selectedProduct} 
      />
    </section>
  )
}
