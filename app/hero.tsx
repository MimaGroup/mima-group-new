import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 bg-[#0B0F17]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
              Transform Your Business with <span className="text-[#4169E1]">AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-400">
              We help businesses leverage artificial intelligence to drive innovation, improve efficiency, and achieve
              strategic transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#4169E1] text-white px-8 py-4 rounded-lg hover:bg-[#4169E1]/80 transition-colors inline-flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="border border-gray-700 text-white px-8 py-4 rounded-lg hover:bg-white/5 transition-colors inline-flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </div>
          <div className="relative aspect-square w-full max-w-[600px] mx-auto">
            <Image
              src="/ai-illustration.png"
              alt="AI Transformation Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}