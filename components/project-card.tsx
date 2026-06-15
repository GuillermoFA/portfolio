"use client"

import { ArrowUpRight, Check } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { TechIcon } from "@/components/tech-icon"
import type { Project } from "@/lib/data"

type ProjectCardProps = {
  project: Project
}

/**
 * Reusable project card styled as a macOS browser window.
 * Add new entries to `projects` in `lib/data.ts` (remember the `image` field)
 * and they will render automatically. Pass an `href` to make it a link.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const { t, lang } = useLanguage()
  const Wrapper = project.href ? "a" : "div"
  const slug = project.title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

  return (
    <Wrapper
      {...(project.href ? { href: project.href, target: "_blank", rel: "noreferrer" } : {})}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
    >
      {/* macOS window chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-[oklch(0.65_0.2_25)]" />
          <span className="h-3 w-3 rounded-full bg-[oklch(0.8_0.16_85)]" />
          <span className="h-3 w-3 rounded-full bg-[oklch(0.72_0.17_150)]" />
        </span>
        <span className="ml-2 flex-1 truncate rounded-md border border-border bg-card px-2.5 py-1 text-center font-mono text-[11px] text-muted-foreground">
          {slug}.app
        </span>
      </div>

      {/* Project screenshot */}
      <div className="relative overflow-hidden">
        <div className="shimmer relative aspect-video overflow-hidden bg-background">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} — ${project.category[lang]}`}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              {project.category[lang]}
            </span>
            <h3 className="mt-1 text-lg font-semibold leading-snug">{project.title}</h3>
          </div>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description[lang]}</p>

        <ul className="mt-4 grid gap-2">
          {project.highlights[lang].map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-foreground/90">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Check className="h-3 w-3" />
              </span>
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.tech.map((tech) => (
            <TechIcon key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </Wrapper>
  )
}
