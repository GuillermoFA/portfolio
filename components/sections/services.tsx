"use client"

import { Code, Cpu, Check, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { ScrollReveal, SectionTag, RevealGroup } from "@/components/scroll-reveal"

const icons = [Code, Cpu]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden border-y border-border bg-card/40 py-20 sm:py-28">
      <div aria-hidden="true" className="aurora-bg opacity-40" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <ScrollReveal>
            <SectionTag>{t.services.tag}</SectionTag>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {t.services.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{t.services.subtitle}</p>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.services.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <ScrollReveal key={item.title} delay={i * 120}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  <RevealGroup className="mt-5 flex flex-wrap gap-2.5">
                    {item.features.map((f, fi) => (
                      <span
                        key={f}
                        className="pill-animate pill-hover inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm"
                        style={{ animationDelay: `${fi * 90}ms` }}
                      >
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <Check className="h-3 w-3" />
                        </span>
                        {f}
                      </span>
                    ))}
                  </RevealGroup>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={120}>
          <div className="mt-10 flex justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] glow-purple"
            >
              {t.services.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
