import Link from "next/link"

export function CTA() {
  return (
    <section className="bg-blue-600 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
        <p className="text-xl text-white mb-8">Get in touch with our experts and start your AI journey today.</p>
        <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Contact Us
        </Link>
      </div>
    </section>
  )
}