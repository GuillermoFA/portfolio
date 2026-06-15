"use client"

import { useState } from "react"

/**
 * Maps a tech/skill label to a theSVG slug. Brand marks come from theSVG.org
 * (review their trademark policy before commercial use).
 */
const TECH_SLUGS: Record<string, string> = {
  Angular: "angular",
  Java: "java",
  "Next.js": "nextdotjs",
  React: "react",
  "Vue.js": "vuedotjs",
  "Node.js": "nodedotjs",
  NestJS: "nestjs",
  Python: "python",
  TypeScript: "typescript",
  JavaScript: "javascript",
  ".NET": "dotnet",
  ".NET Core": "dotnet",
  GCP: "googlecloud",
  Firebase: "firebase",
  BigQuery: "googlebigquery",
  Figma: "figma",
  Git: "git",
  PostgreSQL: "postgresql",
}

function slugFor(tech: string) {
  return TECH_SLUGS[tech]
}

export function TechIcon({ tech }: { tech: string }) {
  const slug = slugFor(tech)
  const [broken, setBroken] = useState(false)
  const showImg = slug && !broken

  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background/80 px-2 py-1 font-mono text-xs text-muted-foreground">
      {showImg ? (
        <span className="flex h-4 w-4 items-center justify-center rounded-[3px] bg-white p-0.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/${slug}/default.svg`}
            alt={tech}
            className="h-full w-full object-contain"
            loading="lazy"
            onError={() => setBroken(true)}
          />
        </span>
      ) : (
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
      )}
      {tech}
    </span>
  )
}
