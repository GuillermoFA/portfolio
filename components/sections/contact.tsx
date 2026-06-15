"use client"

import { Mail, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { ScrollReveal, SectionTag } from "@/components/scroll-reveal"
import { BookingCalendar } from "@/components/booking-calendar"
import { LinkedInIcon } from "@/components/icons"
import { LINKEDIN_URL, EMAIL } from "@/lib/data"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal className="flex justify-center">
            <SectionTag>{t.contact.tag}</SectionTag>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {t.contact.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{t.contact.subtitle}</p>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* LinkedIn + email */}
          <ScrollReveal>
            <div className="flex h-full flex-col gap-4">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/50"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/15 blur-3xl"
                />
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a66c2] text-white">
                    <LinkedInIcon className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold">{t.contact.linkedinTitle}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.contact.linkedinDesc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {t.contact.linkedinCta}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Email</p>
                  <p className="truncate text-sm text-muted-foreground">{EMAIL}</p>
                </div>
              </a>
            </div>
          </ScrollReveal>

          {/* Scheduling */}
          <ScrollReveal delay={120}>
            <div className="rounded-2xl border border-border bg-card/40 p-2">
              <div className="px-5 pt-4">
                <h3 className="text-lg font-semibold">{t.contact.scheduleTitle}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.contact.scheduleDesc}</p>
              </div>
              <div className="p-3">
                <BookingCalendar />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
