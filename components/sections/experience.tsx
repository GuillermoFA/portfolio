"use client"

import { Briefcase } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { ScrollReveal, SectionTag } from "@/components/scroll-reveal"
import { experience } from "@/lib/data"
import { TechIcon } from "@/components/tech-icon"

export function Experience() {
  const { t, lang } = useLanguage()

  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <ScrollReveal>
            <SectionTag>{t.experience.tag}</SectionTag>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {t.experience.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{t.experience.subtitle}</p>
          </ScrollReveal>
        </div>

        <div className="relative mt-12 pl-8 sm:pl-10">
          {/* vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:left-[13px]"
          />

          <div className="space-y-8">
            {experience.map((item, i) => (
              <ScrollReveal key={item.company + i} delay={i * 70}>
                <div className="relative">
                  {/* dot */}
                  <span className="absolute -left-8 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card sm:-left-10">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                    {item.current && (
                      <span className="absolute inline-flex h-6 w-6 animate-ping rounded-full bg-primary/40" />
                    )}
                  </span>

                  <div className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40 sm:p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary">
                        {item.period[lang]}
                      </span>
                      {item.current && (
                        <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground">
                          {t.experience.present}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 flex items-start gap-2 text-lg font-semibold">
                      <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item.role[lang]}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-muted-foreground">
                      {item.company} · {item.location[lang]}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description[lang]}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <TechIcon key={tech} tech={tech} />
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
