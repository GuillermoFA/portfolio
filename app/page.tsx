import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Value } from "@/components/sections/value"
import { Services } from "@/components/sections/services"
import { Process } from "@/components/sections/process"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Certificates } from "@/components/sections/certificates"
import { Contact } from "@/components/sections/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Value />
        <Services />
        <Process />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
