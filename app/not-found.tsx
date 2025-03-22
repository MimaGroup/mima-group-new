import Link from 'next/link'
import { Nav } from './components/nav'
import { Footer } from './components/footer'

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0F17]">
      <Nav />
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6">404</h1>
          <h2 className="text-3xl font-semibold text-white mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-400 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="bg-[#4169E1] text-white px-6 py-3 rounded-lg hover:bg-[#4169E1]/80 transition-colors inline-block"
          >
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
