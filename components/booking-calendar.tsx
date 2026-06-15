"use client"

import { useMemo, useState } from "react"
import { Calendar, Check } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { cn } from "@/lib/utils"

const MONTHS: Record<string, string[]> = {
  es: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  pt: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
}

const WEEKDAYS: Record<string, string[]> = {
  es: ["L", "M", "M", "J", "V", "S", "D"],
  en: ["M", "T", "W", "T", "F", "S", "S"],
  pt: ["S", "T", "Q", "Q", "S", "S", "D"],
}

const SLOTS = ["09:00", "10:00", "11:00", "12:00", "15:00", "16:00", "17:00", "18:00"]

export function BookingCalendar() {
  const { t, lang } = useLanguage()
  const today = new Date()
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1))
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [confirmed, setConfirmed] = useState(false)

  const { year, month, cells } = useMemo(() => {
    const y = viewDate.getFullYear()
    const m = viewDate.getMonth()
    const firstDay = new Date(y, m, 1).getDay() // 0 Sun .. 6 Sat
    const offset = (firstDay + 6) % 7 // make Monday first
    const daysInMonth = new Date(y, m + 1, 0).getDate()
    const arr: (number | null)[] = []
    for (let i = 0; i < offset; i++) arr.push(null)
    for (let d = 1; d <= daysInMonth; d++) arr.push(d)
    return { year: y, month: m, cells: arr }
  }, [viewDate])

  const isPast = (day: number) => {
    const d = new Date(year, month, day)
    const t0 = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    return d < t0
  }
  const isWeekend = (day: number) => {
    const wd = new Date(year, month, day).getDay()
    return wd === 0 || wd === 6
  }

  const changeMonth = (delta: number) => {
    setViewDate(new Date(year, month + delta, 1))
    setSelectedDay(null)
    setSelectedSlot(null)
    setConfirmed(false)
  }

  if (confirmed && selectedDay && selectedSlot) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-7 w-7" />
        </span>
        <h4 className="mt-4 text-lg font-semibold">{t.contact.confirmed}</h4>
        <p className="mt-1 text-sm text-muted-foreground">
          {selectedDay} {MONTHS[lang][month]} {year} · {selectedSlot}
        </p>
        <p className="mt-3 max-w-xs text-sm text-muted-foreground">{t.contact.confirmedNote}</p>
        <button
          type="button"
          onClick={() => {
            setConfirmed(false)
            setSelectedDay(null)
            setSelectedSlot(null)
          }}
          className="mt-5 text-sm font-medium text-primary hover:underline"
        >
          ↺
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => changeMonth(-1)}
          aria-label="Previous month"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent disabled:opacity-40"
          disabled={year === today.getFullYear() && month === today.getMonth()}
        >
          ‹
        </button>
        <span className="text-sm font-semibold">
          {MONTHS[lang][month]} {year}
        </span>
        <button
          type="button"
          onClick={() => changeMonth(1)}
          aria-label="Next month"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent"
        >
          ›
        </button>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground">
        {WEEKDAYS[lang].map((d, i) => (
          <span key={i} className="py-1">
            {d}
          </span>
        ))}
      </div>
      <div className="mt-1 grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (day === null) return <span key={i} />
          const disabled = isPast(day) || isWeekend(day)
          const active = selectedDay === day
          return (
            <button
              key={i}
              type="button"
              disabled={disabled}
              onClick={() => {
                setSelectedDay(day)
                setSelectedSlot(null)
              }}
              className={cn(
                "aspect-square rounded-lg text-sm transition-colors",
                disabled && "cursor-not-allowed text-muted-foreground/30",
                !disabled && !active && "hover:bg-accent",
                active && "bg-primary font-semibold text-primary-foreground",
              )}
            >
              {day}
            </button>
          )
        })}
      </div>

      {selectedDay && (
        <div className="mt-5 border-t border-border pt-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{t.contact.pickTime}</p>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setSelectedSlot(slot)}
                className={cn(
                  "rounded-lg border px-2 py-2 text-sm transition-colors",
                  selectedSlot === slot
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:bg-accent",
                )}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        disabled={!selectedDay || !selectedSlot}
        onClick={() => setConfirmed(true)}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform enabled:hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Calendar className="h-4 w-4" />
        {t.contact.confirm}
      </button>
    </div>
  )
}
