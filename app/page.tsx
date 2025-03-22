import { Hero } from "./components/hero"
import { Services } from "./components/services"
import { CTA } from "./components/cta"
import { Footer } from "./components/footer"
import { Nav } from "./components/nav"

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <CTA />
      <Footer />
    </>
  )
}



