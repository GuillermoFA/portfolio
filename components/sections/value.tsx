"use client"

import { Workflow, Zap, Layers, Rocket } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { ScrollReveal, SectionTag } from "@/components/scroll-reveal"

const icons = [Rocket, Zap, Layers, Workflow]

export function Value() {
  const { t } = useLanguage()

  return (
    <section id="value" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <ScrollReveal>
            <SectionTag>{t.value.tag}</SectionTag>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {t.value.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{t.value.subtitle}</p>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {t.value.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <ScrollReveal key={item.title} delay={i * 90}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                  <div
                    aria-hidden="true"
                    className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100"
                  />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
