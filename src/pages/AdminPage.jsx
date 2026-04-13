import { Link } from 'react-router-dom'
import AdminImageManager from '../components/AdminImageManager'

export default function AdminPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Admin Header */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-lg h-16 sm:h-20">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <Link to="/" className="text-lg sm:text-2xl font-headline font-bold text-[#1a1c1c]">
            Air Dynamics Admin
          </Link>
          <Link to="/" className="text-sm font-bold text-[#ff5722] hover:text-[#ff5722]/80">
            ← Back to Homepage
          </Link>
        </div>
      </nav>
      <div className="pt-24 pb-8">
        <AdminImageManager />
      </div>
    </div>
  )
}

