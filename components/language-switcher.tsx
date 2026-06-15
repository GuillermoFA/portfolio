"use client"

import { useEffect, useRef, useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { LANGS } from "@/lib/i18n"
import { useLanguage } from "@/components/providers/language-provider"
import { cn } from "@/lib/utils"

const FLAG_IMAGES = {
  es: "/espanishflag.png",
  en: "/Flag_of_the_United_States.svg.png",
  pt: "/Flag_of_Brazil.svg.png",
}

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  const current = LANGS.find((l) => l.code === lang)!

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        className="inline-flex h-9 items-center gap-2 rounded-full border border-border bg-card/60 px-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={FLAG_IMAGES[current.code]}
          alt={current.label}
          className="h-5 w-5 rounded-full object-cover shadow-sm border border-border/40"
        />
        <span className="uppercase text-xs tracking-wider font-semibold">{current.code}</span>
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform text-muted-foreground", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-border bg-popover p-1 shadow-xl shadow-black/20">
          {LANGS.map((l) => {
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => {
                  setLang(l.code)
                  setOpen(false)
                }}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                  lang === l.code ? "text-foreground font-medium" : "text-muted-foreground",
                )}
              >
                <span className="flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={FLAG_IMAGES[l.code]}
                    alt={l.label}
                    className="h-4.5 w-4.5 rounded-full object-cover shadow-sm border border-border/40"
                    style={{ width: "18px", height: "18px" }}
                  />
                  {l.label}
                </span>
                {lang === l.code && <Check className="h-4 w-4 text-primary" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
