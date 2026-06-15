"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#process", label: t.nav.process },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4">
      <div
        className={cn(
          "flex w-full items-center justify-between gap-2 rounded-full border border-border backdrop-blur-xl transition-all duration-300",
          scrolled
            ? "max-w-3xl bg-card/80 px-3 py-1.5 shadow-lg shadow-primary/5"
            : "max-w-5xl bg-card/50 px-4 py-2.5",
        )}
      >
        <a href="#top" className="flex shrink-0 items-center gap-2 font-semibold tracking-tight">
          <span
            className={cn(
              "flex items-center justify-center rounded-full bg-primary font-bold text-primary-foreground transition-all duration-300",
              scrolled ? "h-7 w-7 text-xs" : "h-8 w-8 text-sm",
            )}
          >
            GF
          </span>
          <span className="hidden text-sm sm:inline">Guillermo Fuentes</span>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 lg:inline-flex"
          >
            {t.nav.contact}
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-foreground lg:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="absolute inset-x-3 top-full mt-2 grid gap-1 rounded-3xl border border-border bg-card/95 p-3 shadow-xl backdrop-blur-xl lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 rounded-2xl bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
          >
            {t.nav.contact}
          </a>
        </nav>
      )}
    </header>
  )
}
