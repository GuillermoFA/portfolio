"use client"

import { Search, FileSearch, FileText, Code2, Rocket, HeartHandshake } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { ScrollReveal, SectionTag } from "@/components/scroll-reveal"

const stepIcons = [Search, FileSearch, FileText, Code2, Rocket]

export function Process() {
  const { t } = useLanguage()

  return (
    <section id="process" className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="aurora-bg opacity-50" />
      <div aria-hidden="true" className="grid-overlay" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <ScrollReveal>
            <SectionTag>{t.process.tag}</SectionTag>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">{t.process.title}</h2>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{t.process.subtitle}</p>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="relative mt-14 pl-2">
          <div
            aria-hidden="true"
            className="absolute left-[1.35rem] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent"
          />
          <ol className="space-y-8">
            {t.process.steps.map((step, i) => {
              const Icon = stepIcons[i]
              return (
                <ScrollReveal as="li" key={step.title} delay={i * 90} className="relative flex gap-5">
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-card text-primary shadow-lg shadow-primary/10">
                    <Icon className="h-5 w-5" />
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                  </div>
                  <div className="flex-1 rounded-2xl border border-border bg-card/70 p-5 transition-colors hover:border-primary/40">
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </ol>
        </div>

        {/* Post-sale support highlight */}
        <ScrollReveal delay={120}>
          <div className="glow-purple mt-10 flex flex-col items-start gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-7 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{t.process.supportTitle}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.process.supportDesc}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
