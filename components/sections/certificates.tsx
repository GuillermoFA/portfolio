"use client"

import { Award } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { ScrollReveal, SectionTag, RevealGroup } from "@/components/scroll-reveal"
import { TechIcon } from "@/components/tech-icon"
import { certificates, skills } from "@/lib/data"

export function Certificates() {
  const { t } = useLanguage()

  return (
    <section id="certificates" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <ScrollReveal>
            <SectionTag>{t.certificates.tag}</SectionTag>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {t.certificates.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{t.certificates.subtitle}</p>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={(i % 3) * 70}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                  <Award className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold leading-snug">{cert.name}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Skills */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([group, list], i) => (
            <ScrollReveal key={group} delay={i * 70}>
              <div className="rounded-2xl border border-border bg-card p-5">
                <h3 className="text-sm font-semibold text-primary">{group}</h3>
                <RevealGroup className="mt-3 flex flex-wrap gap-2">
                  {list.map((s, si) => (
                    <span
                      key={s}
                      className="pill-animate pill-hover"
                      style={{ animationDelay: `${si * 70}ms` }}
                    >
                      <TechIcon tech={s} />
                    </span>
                  ))}
                </RevealGroup>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
