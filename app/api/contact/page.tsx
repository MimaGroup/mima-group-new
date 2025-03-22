import { Nav } from "../components/nav"
import { Footer } from "../components/footer"
import { ContactForm } from "../components/contact-form"

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0F17]">
      <Nav />
      <main className="flex-grow">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Contact Us</h1>
            <p className="text-xl text-gray-400 text-center mb-12">
              Ready to transform your business? Let's start the conversation.
            </p>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}