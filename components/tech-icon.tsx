"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

/**
 * Maps a tech/skill label to a theSVG slug. Brand marks come from theSVG.org
 * (review their trademark policy before commercial use).
 */
const DEVICON_PATHS: Record<string, string> = {
  Angular: "angular/angular-original.svg",
  Java: "java/java-original.svg",
  "Next.js": "nextjs/nextjs-original.svg",
  React: "react/react-original.svg",
  "Vue.js": "vuejs/vuejs-original.svg",
  "Node.js": "nodejs/nodejs-original.svg",
  NestJS: "nestjs/nestjs-original.svg",
  Python: "python/python-original.svg",
  TypeScript: "typescript/typescript-original.svg",
  JavaScript: "javascript/javascript-original.svg",
  ".NET": "dotnetcore/dotnetcore-original.svg",
  ".NET Core": "dotnetcore/dotnetcore-original.svg",
  GCP: "googlecloud/googlecloud-original.svg",
  Firebase: "firebase/firebase-plain.svg",
  Figma: "figma/figma-original.svg",
  Git: "git/git-original.svg",
  PostgreSQL: "postgresql/postgresql-original.svg",
  "SQL Server": "microsoftsqlserver/microsoftsqlserver-original.svg",
}

const TECH_SLUGS: Record<string, string> = {
  BigQuery: "googlebigquery",
  Dataform: "dataform",
  "Apps Script": "googleappsscript",
  "Data Viz": "chartdotjs",
}

function slugFor(tech: string) {
  return TECH_SLUGS[tech]
}

export function TechIcon({ tech }: { tech: string }) {
  const path = DEVICON_PATHS[tech]
  const slug = slugFor(tech)
  const [broken, setBroken] = useState(false)
  const showImg = (path || slug) && !broken

  const iconUrl = path
    ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`
    : `https://cdn.simpleicons.org/${slug}`

  const isInvertedInDark = tech === "Next.js" || tech === "NextJS"

  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background/80 px-2 py-1 font-mono text-xs text-muted-foreground">
      {showImg ? (
        <span className="flex h-4 w-4 items-center justify-center rounded-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={iconUrl}
            alt={tech}
            className={cn("h-full w-full object-contain", isInvertedInDark && "dark:invert")}
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
