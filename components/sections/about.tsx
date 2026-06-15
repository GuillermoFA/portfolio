"use client"

import Image from "next/image"
import { Download, MapPin } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { ScrollReveal, SectionTag } from "@/components/scroll-reveal"
import { ChileFlag } from "@/components/icons"

export function About() {
  const { t } = useLanguage()

  const stats = [
    { value: "2+", label: t.about.statsExp },
    { value: "5", label: t.about.statsProjects },
    { value: "10+", label: t.about.statsStack },
  ]

  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Photo */}
          <ScrollReveal className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-3xl bg-primary/20 blur-2xl"
            />
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border glow-purple">
              <Image
                src="/profile-photo.jpeg"
                alt="Guillermo Fuentes, Desarrollador Full Stack"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm text-white">
                <span className="font-semibold">Guillermo Fuentes</span>
                <span className="flex items-center gap-1.5 text-white/80">
                  <MapPin className="h-3.5 w-3.5" />
                  <ChileFlag className="h-3 w-auto rounded-[1px]" />
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <div>
            <ScrollReveal>
              <SectionTag>{t.about.tag}</SectionTag>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                {t.about.title}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{t.about.p1}</p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{t.about.p2}</p>
            </ScrollReveal>

            <ScrollReveal delay={260}>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-border bg-card p-4">
                    <div className="text-2xl font-bold text-primary sm:text-3xl">{s.value}</div>
                    <div className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={320}>
              <a
                href="/cv/CV%20Guillermo%20Fuentes%20(2).pdf"
                download
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Download className="h-4 w-4 text-primary" />
                {t.about.downloadCv}
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
