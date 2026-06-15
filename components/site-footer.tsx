"use client"

import { Mail } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { LinkedInIcon } from "@/components/icons"
import { LINKEDIN_URL, EMAIL } from "@/lib/data"

export function SiteFooter() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row">
        <div className="flex items-center gap-2 text-sm">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
            GF
          </span>
          <span className="font-semibold">Guillermo Fuentes</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <p className="text-center text-xs text-muted-foreground md:text-right">
          © {year} Guillermo Fuentes. {t.footer.rights}
          <br className="hidden md:block" />
          <span className="md:hidden"> · </span>
          {t.footer.built}
        </p>
      </div>
    </footer>
  )
}
