"use client"

import { useLanguage } from "@/components/providers/language-provider"
import { ScrollReveal, SectionTag } from "@/components/scroll-reveal"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/data"

export function Projects() {
  const { t } = useLanguage()

  // Sort by year descending (newest first)
  const sorted = [...projects].sort((a, b) => b.year - a.year)

  return (
    <section id="projects" className="scroll-mt-20 border-y border-border bg-card/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <ScrollReveal>
            <SectionTag>{t.projects.tag}</SectionTag>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {t.projects.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{t.projects.subtitle}</p>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {sorted.map((project, i) => (
            <ScrollReveal key={project.title} delay={(i % 2) * 90}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
