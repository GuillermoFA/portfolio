"use client"

import { ArrowRight, Download, MapPin } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { ChileFlag } from "@/components/icons"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* animated aurora + grid background */}
      <div aria-hidden="true" className="aurora-bg" />
      <div aria-hidden="true" className="grid-overlay" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-6">
          <div className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {t.hero.available}
          </div>

          <p className="reveal is-visible font-mono text-sm text-muted-foreground" style={{ animationDelay: "80ms" }}>
            {t.hero.role}
          </p>

          <h1
            className="reveal is-visible max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
            style={{ animationDelay: "160ms" }}
          >
            {t.hero.title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="text-gradient">{t.hero.title.split(" ").slice(-2).join(" ")}</span>
          </h1>

          <p
            className="reveal is-visible max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "240ms" }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="reveal is-visible flex items-center gap-2 text-sm text-muted-foreground"
            style={{ animationDelay: "300ms" }}
          >
            <MapPin className="h-4 w-4 text-primary" />
            {t.hero.location}
            <ChileFlag className="h-3.5 w-auto rounded-[2px]" />
          </div>

          <div
            className="reveal is-visible flex flex-col gap-3 pt-2 sm:flex-row sm:items-center"
            style={{ animationDelay: "380ms" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] glow-purple"
            >
              {t.hero.ctaContact}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/cv/CV%20Guillermo%20Fuentes%20(2).pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Download className="h-4 w-4" />
              {t.hero.ctaCv}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
